
import { NextResponse, type NextRequest } from 'next/server';
import { waitlistSchema, type WaitlistFormData } from '@/lib/types';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import nodemailer from 'nodemailer';


// Helper function to add data to Google Sheets
async function addToGoogleSheet(data: WaitlistFormData) {
  const { GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY } = process.env;

  if (!GOOGLE_SHEET_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
    console.warn('Google Sheets environment variables not set. Skipping sheet update.');
    return { success: false, message: "Google Sheets credentials not configured on the server." ,waitlistPosition:null};
  }

  try {
    const serviceAccountAuth = new JWT({
      email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Ensure newlines are correctly formatted
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo(); // loads document properties and worksheets

    const sheet = doc.sheetsByIndex[0]; // Assumes you want to use the first sheet
    const rows = await sheet.getRows(); // Load existing rows to check for headers
    const waitistPosition = rows.length + 1; // Position is the number of existing rows + 1

    if(rows.length === 0 && sheet.headerValues.length === 0){
      console.log('Sheet is empty, setting headers for the first time.');
      await sheet.setHeaderRow(['Timestamp', 'Name', 'Email', 'Startup Name', 'Startup Stage']);
    }

    const expectedHeaders = ['Timestamp', 'Name', 'Email', 'Startup Name', 'Startup Stage'];

    // Attempt to load the header row. This is crucial before reading sheet.headerValues.
    // If the sheet is brand new and empty, loadHeaderRow() might not find a header row.
    try {
      await sheet.loadHeaderRow();
    } catch (error) {
      // This can happen if the sheet is truly empty (no rows at all).
      // In this scenario, sheet.headerValues will likely be undefined or an empty array.
      // We will proceed to set the headers if they are not as expected.
      console.warn('Failed to load header row, possibly sheet is empty. Will attempt to set/check headers. Error:', error instanceof Error ? error.message : String(error));
    }

    const currentHeaders = sheet.headerValues;

    // Check if headers need to be set (either missing, empty, or not matching expected)
    let headersAreCorrect = false;
    if (currentHeaders && currentHeaders.length === expectedHeaders.length) {
      headersAreCorrect = expectedHeaders.every(expectedHeader => currentHeaders.includes(expectedHeader));
    }

    if (!headersAreCorrect) {
        console.log('Headers are missing, empty, or do not match expected. Setting new headers.');
        await sheet.setHeaderRow(expectedHeaders);
        // After setHeaderRow, sheet.headerValues should be updated by the library.
    }
    
    const timestamp = new Date().toISOString();
    await sheet.addRow({
      Timestamp: timestamp,
      Name: data.name,
      Email: data.email,
      'Startup Name': data.startupName,
      'Startup Stage': data.startupStage,
    });
    console.log('Data added to Google Sheet:', data);
    return { success: true, message: "Successfully added to Google Sheet.",waitlistPosition: waitistPosition };
  } catch (error) {
    console.error('Error adding to Google Sheet:', error);
    let errorMessage = 'Could not save to Google Sheet.';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    // Specific check for the "Header values are not yet loaded" error to give more context if it still occurs.
    if (typeof errorMessage === 'string' && errorMessage.includes('Header values are not yet loaded')) {
      errorMessage = 'Failed to process sheet headers. Please ensure the sheet is accessible and try again. Error: Header values are not yet loaded.';
    }
    return { success: false, message: errorMessage, waitlistPosition: null };
  }
}

async function sendEmail(data: WaitlistFormData) {
  const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
    console.error("Missing email configuration.");
    return { success: false, message: "Email config missing." };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: EMAIL_USER,
    to: EMAIL_TO,
    subject: 'New Waitlist Submission',
    text: `
      Name: ${data.name}
      Email: ${data.email}
      Startup Name: ${data.startupName}
      Startup Stage: ${data.startupStage}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully." };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Email sending failed." };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = waitlistSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json({ message: 'Invalid form data.', errors: validatedData.error.flatten().fieldErrors }, { status: 400 });
    }

    // Log to console (original behavior)
    console.log('Waitlist submission:', validatedData.data);

    // Add to Google Sheet
    const sheetResult = await addToGoogleSheet(validatedData.data);
    

    // Send email notification
    const emailResult = await sendEmail(validatedData.data);

    // Log email result
    if(emailResult.success) {
      console.log('Email sent successfully:', emailResult.message);
    }
    else {
      console.warn('Email sending failed:', emailResult.message);
    }

    // Simulate a delay (original behavior)
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (sheetResult.success) {
      return NextResponse.json({ message: 'Successfully joined the waitlist and data saved to sheet!',waitlistPosition:sheetResult.waitlistPosition }, { status: 200 });
    } else {
      // If saving to sheet failed, still inform the user they joined the waitlist
      // but log the sheet issue.
      console.warn('User joined waitlist, but failed to save to Google Sheet:', sheetResult.message);
      // Return a more generic error to the client if sheet saving failed, but confirm waitlist join.
      return NextResponse.json({ message: `Successfully joined the waitlist! (Note: ${sheetResult.message})` }, { status: 200 });
    }

  } catch (error) {
    console.error('Waitlist API error:', error);
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}



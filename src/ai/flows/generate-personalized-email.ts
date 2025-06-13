'use server';

/**
 * @fileOverview A flow to generate personalized emails to investors.
 *
 * - generatePersonalizedEmail - A function that generates a personalized email to an investor.
 * - GeneratePersonalizedEmailInput - The input type for the generatePersonalizedEmail function.
 * - GeneratePersonalizedEmailOutput - The return type for the generatePersonalizedEmail function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedEmailInputSchema = z.object({
  startupProfile: z
    .string()
    .describe('The profile of the startup, including industry, stage, and key highlights.'),
  investorBackground: z
    .string()
    .describe('The background of the investor, including their investment history and interests.'),
});
export type GeneratePersonalizedEmailInput = z.infer<
  typeof GeneratePersonalizedEmailInputSchema
>;

const GeneratePersonalizedEmailOutputSchema = z.object({
  emailSubject: z.string().describe('The subject line of the email.'),
  emailBody: z.string().describe('The body of the personalized email.'),
});
export type GeneratePersonalizedEmailOutput = z.infer<
  typeof GeneratePersonalizedEmailOutputSchema
>;

export async function generatePersonalizedEmail(
  input: GeneratePersonalizedEmailInput
): Promise<GeneratePersonalizedEmailOutput> {
  return generatePersonalizedEmailFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedEmailPrompt',
  input: {schema: GeneratePersonalizedEmailInputSchema},
  output: {schema: GeneratePersonalizedEmailOutputSchema},
  prompt: `You are an AI assistant specializing in crafting personalized emails to investors for startups.

  Given the startup's profile and the investor's background, your goal is to generate a compelling email that increases the chances of getting a meeting.

  Startup Profile: {{{startupProfile}}}
  Investor Background: {{{investorBackground}}}

  Consider the investor's past investments, their areas of interest, and the startup's unique value proposition to create a personalized email.
  The email should be concise, engaging, and clearly articulate why the investor should be interested in meeting with the startup. The email should include a clear call to action.
  Please output the email subject and the body in the output schema format.
  `,
});

const generatePersonalizedEmailFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedEmailFlow',
    inputSchema: GeneratePersonalizedEmailInputSchema,
    outputSchema: GeneratePersonalizedEmailOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

'use server';

/**
 * @fileOverview A flow to generate an institutional-grade investment memo from startup data.
 *
 * - generateInvestmentMemo - A function that generates the investment memo.
 * - GenerateInvestmentMemoInput - The input type for the generateInvestmentMemo function.
 * - GenerateInvestmentMemoOutput - The return type for the generateInvestmentMemo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInvestmentMemoInputSchema = z.object({
  companyName: z.string().describe('The name of the company.'),
  companyDescription: z.string().describe('A detailed description of the company and its mission.'),
  problem: z.string().describe('The problem the company is solving.'),
  solution: z.string().describe('The solution the company offers.'),
  targetMarket: z.string().describe('The target market for the company.'),
  businessModel: z.string().describe('The business model of the company.'),
  financialProjections: z
    .string()
    .describe('Financial projections for the next 3-5 years.'),
  team: z.string().describe('Information about the company founders and team.'),
  fundingRound: z.string().describe('The current funding round the company is raising.'),
  amountRaising: z.string().describe('The amount of funding the company is raising.'),
  useOfFunds: z.string().describe('How the company plans to use the funds raised.'),
  exitStrategy: z.string().describe('Potential exit strategies for the company.'),
});
export type GenerateInvestmentMemoInput = z.infer<
  typeof GenerateInvestmentMemoInputSchema
>;

const GenerateInvestmentMemoOutputSchema = z.object({
  investmentMemo: z.string().describe('The generated investment memo.'),
});
export type GenerateInvestmentMemoOutput = z.infer<
  typeof GenerateInvestmentMemoOutputSchema
>;

export async function generateInvestmentMemo(
  input: GenerateInvestmentMemoInput
): Promise<GenerateInvestmentMemoOutput> {
  return generateInvestmentMemoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateInvestmentMemoPrompt',
  input: {schema: GenerateInvestmentMemoInputSchema},
  output: {schema: GenerateInvestmentMemoOutputSchema},
  prompt: `You are an expert in creating institutional-grade investment memos.
  Given the following information about a startup, generate a detailed and well-structured investment memo.

  Company Name: {{{companyName}}}
  Company Description: {{{companyDescription}}}
  Problem: {{{problem}}}
  Solution: {{{solution}}}
  Target Market: {{{targetMarket}}}
  Business Model: {{{businessModel}}}
  Financial Projections: {{{financialProjections}}}
  Team: {{{team}}}
  Funding Round: {{{fundingRound}}}
  Amount Raising: {{{amountRaising}}}
  Use of Funds: {{{useOfFunds}}}
  Exit Strategy: {{{exitStrategy}}}

  Investment Memo:`,
});

const generateInvestmentMemoFlow = ai.defineFlow(
  {
    name: 'generateInvestmentMemoFlow',
    inputSchema: GenerateInvestmentMemoInputSchema,
    outputSchema: GenerateInvestmentMemoOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

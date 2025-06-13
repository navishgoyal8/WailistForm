'use server';

/**
 * @fileOverview An AI agent that recommends KPIs relevant to a business model.
 *
 * - recommendKPIs - A function that handles the KPI recommendation process.
 * - RecommendKPIsInput - The input type for the recommendKPIs function.
 * - RecommendKPIsOutput - The return type for the recommendKPIs function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendKPIsInputSchema = z.object({
  businessModelDescription: z
    .string()
    .describe('A detailed description of the business model.'),
});
export type RecommendKPIsInput = z.infer<typeof RecommendKPIsInputSchema>;

const RecommendKPIsOutputSchema = z.object({
  kpiRecommendations: z
    .array(z.string())
    .describe('A list of recommended KPIs for the business model.'),
  potentialInvestorQuestions: z
    .array(z.string())
    .describe('A list of potential tough questions from investors.'),
});
export type RecommendKPIsOutput = z.infer<typeof RecommendKPIsOutputSchema>;

export async function recommendKPIs(
  input: RecommendKPIsInput
): Promise<RecommendKPIsOutput> {
  return recommendKPIsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendKPIsPrompt',
  input: {schema: RecommendKPIsInputSchema},
  output: {schema: RecommendKPIsOutputSchema},
  prompt: `You are an expert consultant specializing in advising startups. You will use the business model description to recommend relevant KPIs and potential tough questions from investors.

Business Model Description: {{{businessModelDescription}}}

Based on the business model description, provide a list of 3-5 key performance indicators (KPIs) that the startup should track. Also, provide a list of 3-5 potential tough questions that investors might ask.

Format your output as a JSON object with the following keys:
- kpiRecommendations: An array of strings, where each string is a recommended KPI.
- potentialInvestorQuestions: An array of strings, where each string is a potential tough question from investors.`,
});

const recommendKPIsFlow = ai.defineFlow(
  {
    name: 'recommendKPIsFlow',
    inputSchema: RecommendKPIsInputSchema,
    outputSchema: RecommendKPIsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

import { config } from 'dotenv';
config();

import '@/ai/flows/generate-investment-memo.ts';
import '@/ai/flows/generate-personalized-email.ts';
import '@/ai/flows/generate-pitch-feedback.ts';
import '@/ai/flows/recommend-kpis.ts';
import { z } from 'zod';

export const waitlistSchema = z.object({
  name: z.string().min(1, { message: "Full name is required." }).max(100),
  email: z.string().email({ message: "Invalid email address." }).max(100),
  startupName: z.string().min(1, { message: "Startup name is required." }).max(100),
  startupStage: z.enum(["Pre-seed", "Seed", "Series A", "Series B+", "Idea Stage"], {
    errorMap: () => ({ message: "Please select a startup stage." }),
  }),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;

import { z } from "zod";

export const AnalyzeSchema = z.object({
  message: z.string().min(1, "At least give a proper input"),
  sessionId: z.string().uuid(),
  model: z.string(),
});

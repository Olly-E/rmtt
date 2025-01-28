import { OPTION_VALIDATION } from "@/app/utils/constants";
import { object, string, z } from "zod";

export const createTimeSchema = object({
  note: string().optional(),
  projectTitle: OPTION_VALIDATION,
  startTime: string().optional(),
  task: OPTION_VALIDATION,
});

export type CreateTimeForm = z.infer<typeof createTimeSchema>;
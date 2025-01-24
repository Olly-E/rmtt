import { OPTION_VALIDATION } from "@/app/utils/constants";
import { date, object, string, z } from "zod";

export const createProjectSchema = object({
  project_code: string().optional(),
  client: OPTION_VALIDATION,
  project_name: string({ required_error: "Project name is required" }).min(
    1,
    "Required"
  ),
  start_date: date()
    .min(new Date("2021-01-01"), "Start date should be after 2021")
    .optional(),
  end_date: date()
    .min(new Date("2021-01-01"), "End date should be after 2021")
    .optional(),
  notes: string().optional(),
  permission: string().optional(),
  task: string().array().optional(),
  project_manager: string().optional(),
  team: string().array().optional(),
});

export type AddNewProjectType = z.infer<typeof createProjectSchema>;

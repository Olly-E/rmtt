import {
  OPTION_VALIDATION,
  OPTION_VALIDATION_OPTIONAL,
} from "@/app/utils/constants";
import { isValidPhoneNumber } from "react-phone-number-input";
import { number, object, string, z } from "zod";

export const addClientSchema = object({
  clientName: string({ required_error: "First name is required" }).min(
    1,
    "Required"
  ),
  address: string({ required_error: "Address is required" }).min(1, "Required"),
  preferred_currency: OPTION_VALIDATION,
});

export type AddClientType = z.infer<typeof addClientSchema>;

export const addContactSchema = (id: string | undefined) =>
  object({
    first_name: string({ required_error: "First name is required" }).min(
      1,
      "Required"
    ),
    last_name: string({ required_error: "Last name is required" }).min(
      1,
      "Required"
    ),
    email: z
      .string()
      .refine(
        (value) => value === "" || z.string().email().safeParse(value).success,
        {
          message: "Invalid email",
        }
      )
      .optional(),
    title: string().trim().optional(),
    office_phone_number: string()
      .refine(
        (value) => isValidPhoneNumber(value || ""), // Ensure value is a string and validate it
        { message: "Invalid phone number" } // Custom error message
      )
      .optional(),
    mobile_phone_number: string()
      .refine(
        (value) => isValidPhoneNumber(value || ""), // Ensure value is a string and validate it
        { message: "Invalid phone number" } // Custom error message
      )
      .optional(),
    fax_number: string().trim().optional(),
    client: id ? OPTION_VALIDATION_OPTIONAL : OPTION_VALIDATION,
  });

export type AddContactSchemaType = z.infer<ReturnType<typeof addContactSchema>>;

export const addTaskSchema = object({
  name: string({ required_error: "Task name is required" }).min(1, "Required"),
  billable_rate: number(),
  is_default_billable: z.boolean().optional(),
  is_common_and_future_adding: z.boolean().optional(),
  is_added_to_all_existing_project: z.boolean().optional(),
});

export type AddTaskFormType = z.infer<typeof addTaskSchema>;

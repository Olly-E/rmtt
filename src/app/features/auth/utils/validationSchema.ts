import { OPTION_VALIDATION } from "@/app/utils/constants";
import { object, string, z } from "zod";

export const SignInSchema = object({
  email: string().email("Please enter a valid email"),
  password: string({ required_error: "Password is required" }).min(
    1,
    "Required"
  ),
});

export type SignInInputType = z.infer<typeof SignInSchema>;

export const SignUpSchema = object({
  first_name: string({ required_error: "First name is required" }).min(
    1,
    "Required"
  ),
  last_name: string({ required_error: "Last name is required" }).min(
    1,
    "Required"
  ),
  company: string({ required_error: "Company is required" }).min(1, "Required"),
  email: string().email("Please enter a valid email"),
  password: string({ required_error: "Password is required" }).min(
    8,
    "Password must be at least 8 characters"
  ),
});

export const onboardingSchema = object({
  companyName: string({ required_error: "Company name is required" }).min(
    1,
    "Required"
  ),
  role: OPTION_VALIDATION,
  industry: OPTION_VALIDATION,
  companySize: string({ required_error: "Company size is required" }),
});

export type OnboardingInputType = z.infer<typeof onboardingSchema>;

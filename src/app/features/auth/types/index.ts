export interface LoginForm {
  email: string;
  password: string;
}

export interface SignUpForm {
  company: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface SignUpPayload {
  company: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface ForgotPasswordProps {
  email: string;
}

export interface ConfirmPasswordProps {
  password: string;
  confirmPassword: string;
}

export interface UpdateProfileProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginFormProps {
  email: string;
  password: string;
}

export interface SignUpFormProps {
  company: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface LoginResponse {
  userId: string;
  accessToken: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface SignUpResponse {
  id: string;
  email: string;
  fullname: string;
  first_name: string;
  last_name: string;
  username: string;
  company: string;
  role: string;
  created_at: string;
  updated_at: string;
  token: string;
}

export interface LoginSuccessResponse {
  message: string;
  token: string;
  id: string;
  last_login: string;
  is_superuser: boolean;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
  email: string;
  first_name: string;
  last_name: string;
  company: string;
  username: string;
  is_verified: boolean;
  role: string;
  image: string;
  engineer_details: string;
  is_user_company_name: string;
  organization_position_status: string;
  organization_industry: string;
  people_to_work_with: string;
  added_team_memebers: string;
  hope_to_get: string;
  heard_about_company_medium: string;
  created_at: string;
  updated_at: string;
  groups: string[];
  user_permissions: string[];
}

export type VerificationResponse = LoginSuccessResponse

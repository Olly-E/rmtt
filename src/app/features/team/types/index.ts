import { PaginatedResponse } from "../../manage/types";

export interface TeamData {
  firstName: string;
  lastName: string;
  role: string;
  hoursDone: number;
  capacity: number;
  billable: number;
  acceptedInvite: boolean;
  id: string;
}
export interface AddTeamForm {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  capacity: number;
  billableRate: number;
  type: string;
}

export interface ResetPasswordProps {
  password: string;
  confirmPassword: string;
}

export interface ResetPasswordPayload {
  code: string;
  password: string;
}

export interface OnboardingPayload {
  company_name: string;
  id: string;
  organization_position_status: string;
  organization_industry: string;
  people_to_work_with: string;
}

export interface TeamMemberData {
  first_name: string;
  last_name: string;
  role: string;
}

export interface AllTeamMemberDataResponse extends PaginatedResponse {
  results: TeamMemberData[];
}
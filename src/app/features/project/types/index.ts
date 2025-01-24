import { PaginatedResponse } from "../../manage/types";

export interface AddNewProjectForm {
  firstName: string;
  projectName: string;
  projectCode: string;
  startDate: string;
  endDate: string;
  note: string;
}

export interface CreateProjectPayload {
  name: string;
  description: string;
  tag: string;
  job_estimated_time: string;
  start_date: string;
  end_date: string;
  project_code: string;
  notes: string;
  permission: string;
  project_manager: string;
  client: string;
  project_type: Record<string, unknown>;
  engineers: string[] | null;
  tasks: string[];
  team: string[];
}

export interface ProjectDataType {
  id: string;
  project_manager_details: {
    email: string;
    fullname: string;
    username: string | null;
    role: string;
    image: string | null;
  };
  engineers_details: {
    email: string;
    fullname: string;
    username: string | null;
    role: string;
    image: string | null;
  }[];
  total_time_spent_by_engineers: string;
  tasks: {
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    description: string | null;
    billable_rate: string;
    is_default_billable: boolean;
    is_common_and_future_adding: boolean;
    is_added_to_all_existing_project: boolean;
  }[];
  team: {
    id: string;
    last_login: string | null;
    is_superuser: boolean;
    is_staff: boolean;
    is_active: boolean;
    date_joined: string;
    email: string;
    first_name: string;
    last_name: string;
    company: string;
    username: string | null;
    is_verified: boolean;
    role: string;
    image: string | null;
    engineer_details: string | null;
    is_user_company_name: string | null;
    organization_position_status: string;
    organization_industry: string;
    people_to_work_with: string;
    added_team_memebers: string | null;
    hope_to_get: string | null;
    heard_about_company_medium: string;
    created_at: string;
    updated_at: string;
    groups: string[];
    user_permissions: string[];
  }[];
  created_at: string;
  updated_at: string;
  name: string;
  description: string;
  tag: string;
  job_estimated_time: string;
  start_date: string;
  end_date: string;
  project_code: string;
  notes: string;
  permission: string;
  project_type: Record<string, unknown>;
  amount_spent: string;
  amount_remaining: string;
  is_active: boolean;
  project_manager: string;
  client: string;
  engineers: string[];
}

export interface ProjectDataResponse extends PaginatedResponse {
  results: ProjectDataType[];
}

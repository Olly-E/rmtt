import { Option } from "@/app/types";

export interface AddContactsForm {
  client: Option;
  firstName: string;
  lastName: string;
  email: string;
  title: string;
  officePhone: string;
  mobilePhone: string;
  faxNumber: string;
}

export interface AddTaskPayload {
  name: string;
  billable_rate: string;
  is_default_billable: boolean;
  is_common_and_future_adding: boolean;
  is_added_to_all_existing_project: boolean;
}

export interface AddClientForm {
  clientName: string;
  address: string;
  preferred_currency: Option;
}

export interface AddClientPayload {
  name: string;
  address: string;
  preferred_currency: string;
}

export interface AddContactsPayload {
  client: string;
  first_name: string;
  last_name: string;
  email: string;
  title: string;
  office_phone_number: string;
  mobile_phone_number: string;
  fax_number: string;
}

export interface PaginatedResponse {
  links: {
    next: string | null;
    previous: string | null;
  };
  total: number;
  total_pages: number;
  current_page: number;
  page_size: number;
}

export interface ClientDataResults {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  address: string;
  preferred_currency: string;
}

export interface ClientDataTypeResponse extends PaginatedResponse {
  results: ClientDataResults[];
}

export interface TaskDataTypeResponse {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  description: string | null;
  billable_rate: string;
  is_default_billable: boolean;
  is_common_and_future_adding: boolean;
  is_added_to_all_existing_project: boolean;
}

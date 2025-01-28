export interface PendingTimeProp {
  title: string;
  date: string;
  timeData: {
    mon: string;
    tue: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
    sun: string;
  };
  totalTime: string;
}

export interface CreateTimePayload {
  task_id: string;
  project_id: string;
  start_time: string;
}

export interface TimeLogDataType {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  description: string;
  billable_rate: number;
  is_default_billable: boolean;
  is_common_and_future_adding: boolean;
  is_added_to_all_existing_project: boolean;
  initiator: string;
}
export interface AllTimeLogDataType {
  tasks: TimeLogDataType[];
}

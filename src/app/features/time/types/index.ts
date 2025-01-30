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
  project_name: string;
  task_name: string;
  id: string;
  task_id: string;
  project_id: string;
  user_id: string;
  time_spent: string;
  is_active: boolean;
  start_time: string;
  end_time: string | null;
}

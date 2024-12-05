import { Option } from "@/app/types";

export interface NewTimeEntryForm {
  title: string;
  category: Option;
  note: string;
  initialTime: string;
}

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
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

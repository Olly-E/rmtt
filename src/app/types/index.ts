export interface Option {
  id: string;
  name: string;
}

export interface CommonData {
  id: string;
  name: string;
  code: string;
}

export enum AccessType {
  ADMIN = "ADMIN",
  MEMBER = "MEMBER",
}

export interface Usermini {
  id: string;
  firstName: string;
  lastName: string;
}

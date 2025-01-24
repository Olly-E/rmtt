import { array, object, string } from "zod";

export const METHOD = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
};

export const EMPTY_OPTION = {
  name: "",
  id: "",
};

export const OPTION_VALIDATION = object({
  name: string({ required_error: "Required" }).min(1, "Required"),
  id: string({ required_error: "Required" }).min(1, "Required"),
});

export const OPTION_VALIDATION_OPTIONAL = object({
  name: string().trim().optional(),
  id: string().trim().optional(),
}).optional();

export const OPTIONS_VALIDATION = array(OPTION_VALIDATION).min(1, {
  message: "At least one option is required",
});

export const CURRENCY_DATA_OPT = [
  {
    name: "USD",
    id: "USD",
  },
  {
    name: "EUR",
    id: "EUR",
  },
];

export const TEAM_MEMBER_OPTIONS = [
  { id: "1", name: "Olivia Smith" },
  { id: "2", name: "David Johnson" },
  { id: "3", name: "Emma Brown" },
  { id: "4", name: "Liam Davis" },
  { id: "5", name: "Sophia Wilson" },
  { id: "6", name: "James Martinez" },
];

export const clientKeys = {
  all: ["client"] as const,
  lists: () => [...clientKeys.all, "list"] as const,
  list: (id: string) => [...clientKeys.all, "list", id] as const,
  details: () => [...clientKeys.all, "detail"] as const,
  detail: (id: string) => [...clientKeys.details(), id] as const,
};

export const contactKeys = {
  all: ["contact"] as const,
  lists: () => [...contactKeys.all, "list"] as const,
  list: (id: string) => [...contactKeys.all, "list", id] as const,
  details: () => [...contactKeys.all, "detail"] as const,
  detail: (id: string) => [...contactKeys.details(), id] as const,
};

export const taskKeys = {
  all: ["task"] as const,
  lists: () => [...taskKeys.all, "list"] as const,
  list: (id: string) => [...taskKeys.all, "list", id] as const,
  details: () => [...taskKeys.all, "detail"] as const,
  detail: (id: string) => [...taskKeys.details(), id] as const,
};

export const projectKeys = {
  all: ["project"] as const,
  lists: () => [...projectKeys.all, "list"] as const,
  list: (id: string) => [...projectKeys.all, "list", id] as const,
  details: () => [...projectKeys.all, "detail"] as const,
  detail: (id: string) => [...projectKeys.details(), id] as const,
};

export const teamMembersKey = {
  all: ["teamMembers"] as const,
  lists: () => [...teamMembersKey.all, "list"] as const,
  list: (id: string) => [...teamMembersKey.all, "list", id] as const,
  details: () => [...teamMembersKey.all, "detail"] as const,
  detail: (id: string) => [...teamMembersKey.details(), id] as const,
};

export const timeKeys = {
  all: ["time"] as const,
  lists: () => [...timeKeys.all, "list"] as const,
  list: (id: string) => [...timeKeys.all, "list", id] as const,
  details: () => [...timeKeys.all, "detail"] as const,
  detail: (id: string) => [...timeKeys.details(), id] as const,
}
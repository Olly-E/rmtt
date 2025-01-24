import { fetchData } from "@/app/utils/fetchData";
import { projectKeys } from "@/app/utils/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { ProjectDataResponse } from "../types";

export const useAllProjects = ({
  page = 1,
  limit = 50,
  search = "",
}: {
  page?: number;
  limit?: number;
  search?: string;
}) => {
  return useQuery<ProjectDataResponse>({
    queryKey: projectKeys.list(`page=${page}&perPage=${limit}&search=${search}`),
    queryFn: async () =>
      fetchData(`/trackers/projects/`),
  });
};

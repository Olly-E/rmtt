import { fetchData } from "@/app/utils/fetchData";
import { teamMembersKey } from "@/app/utils/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { AllTeamMemberDataResponse } from "../types";

export const useAllTeamMember = ({
  page = 1,
  limit = 50,
  search = "",
}: {
  page?: number;
  limit?: number;
  search?: string;
}) => {
  return useQuery<AllTeamMemberDataResponse>({
    queryKey: teamMembersKey.list(`page=${page}&perPage=${limit}&search=${search}`),
    queryFn: async () => fetchData(`/users/`),
  });
};

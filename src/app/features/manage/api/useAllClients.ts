import { fetchData } from "@/app/utils/fetchData";
import { clientKeys } from "@/app/utils/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { ClientDataTypeResponse } from "../types";

export const useAllClients = ({
  page = 1,
  limit = 50,
  search = "",
}: {
  page?: number;
  limit?: number;
  search?: string;
}) => {
  return useQuery<ClientDataTypeResponse>({
    queryKey: clientKeys.list(`page=${page}&perPage=${limit}&search=${search}`),
    queryFn: async () =>
      fetchData(`/manage-dashboard/clients/`),
  });
};

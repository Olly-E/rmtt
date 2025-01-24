import { fetchData } from "@/app/utils/fetchData";
import { contactKeys } from "@/app/utils/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { ClientDataTypeResponse } from "../types";

export const useAllContacts = ({
  page = 1,
  limit = 50,
  search = "",
  clientId,
}: {
  page?: number;
  limit?: number;
  search?: string;
  clientId: string;
}) => {
  return useQuery<ClientDataTypeResponse>({
    queryKey: contactKeys.list(
      `page=${page}&perPage=${limit}&search=${search}`
    ),
    queryFn: async () => fetchData(`/manage-dashboard/contacts/${clientId}`),
  });
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { timeKeys } from "@/app/utils/query-key-factory";
import { transformError } from "@/app/utils/utils";
import { fetchData } from "@/app/utils/fetchData";
import { AxiosError } from "axios";
import { Pause } from "iconsax-react";

export const useStopTime = () => {
  type PayloadType = {
    time_entry_id: string;
  };
  const queryClient = useQueryClient();
  return useMutation<Response, AxiosError, PayloadType>({
    mutationFn: (payload) =>
      fetchData<PayloadType>(
        `/trackers/projects/stop-tracking/`,
        "PATCH",
        payload
      ),
    onSuccess: () => {
      toast.success("Time stopped.", {
        icon: (
          <div className="w-[20px] h-[20px] min-w-[20px] rounded-full bg-black centered">
            <Pause size={10} color="#FFFFFF" variant="Bold" />
          </div>
        ),
      });
      queryClient.invalidateQueries({
        queryKey: timeKeys.all,
      });
    },
    onError: (error) => {
      toast.error(transformError(error));
    },
  });
};

//time would be fetched according to date later on so when time is stopped or started the log of that particular date would be invalidated instead of all the logs
//this has to be done so the effect of  only one timelog is running in a day is possible since the state is being validated from the backend

import { axiosInstance } from "../lib/axios";
import { METHOD } from "./constants";


export const fetchData = async <T>(
  url: string,
  method: 'POST' | 'PUT' | 'GET' | 'DELETE' = 'GET',
  payload?: T
) => {
  const { POST, PUT, GET, DELETE } = METHOD;

  if (method === POST) {
    const { data } = await axiosInstance.post(url, payload);
    return data;
  }

  if (method === GET) {
    const { data } = await axiosInstance.get(url);
    return data;
  }

  if (method === PUT) {
    const { data } = await axiosInstance.put(url, payload);
    return data;
  }

  if (method === DELETE) {
    const { data } = await axiosInstance.delete(url);
    return data;
  }
};
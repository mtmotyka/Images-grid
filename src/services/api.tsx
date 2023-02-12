import { apiUrl } from "../constants";

export const fetchImages = async (limit: number) => {
  const response = await fetch(`${apiUrl}?limit=${limit}`);
  const data = await response.json();
  return data;
};

import axios from "axios";
import type { Role, User } from "@/hooks/user/type";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(`${API_BASE_URL}/api/users`);
  return response.data;
};

export const getUserRoles = async (): Promise<Role[]> => {
  const response = await axios.get<Role[]>(`${API_BASE_URL}/api/user-roles`);
  return response.data;
};

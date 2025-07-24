import { useQuery } from "@tanstack/react-query";

import { getUserRoles, getUsers } from "@/api/user";
import type { Role, User } from "./type";

export const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ["get-user"],
    queryFn: getUsers,
  });
};

export const useUserRoles = () => {
  return useQuery<Role[]>({
    queryKey: ["get-user-roles"],
    queryFn: getUserRoles,
  });
};

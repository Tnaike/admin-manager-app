export type UserRoleType = "DEFAULT" | "CUSTOM" | "SYSTEM-CUSTOM";
export type UserRoleStatus = "Active" | "InActive";

export type UserRole = {
  role: string;
  status: UserRoleStatus;
  createdAt: string;
  updatedAt: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  alternativeEmail: string | null;
  type: UserRoleType;
  createdAt: string;
  updatedAt: string;
  status: UserRoleStatus;
  photo: string;
  usersRole: UserRole[];
};

export type RoleUser = {
  name: string;
  src: string;
};

export type Role = {
  id: string;
  name: string;
  type: UserRoleType;
  createdAt: string;
  updatedAt: string;
  status: UserRoleStatus;
  users: RoleUser[];
};

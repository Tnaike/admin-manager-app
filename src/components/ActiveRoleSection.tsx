import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoleRadioGroup } from "./RoleRadioGroup";
import { useUsers, useUserRoles } from "@/hooks/user";
import { formatDate } from "@/lib/utils";
import { Loader } from "@/components/ui/loader";
import type { Role as UserRole } from "@/hooks/user/type";

export function ActiveRoleSection() {
  const [selected, setSelected] = useState("");
  const [addedRoles, setAddedRoles] = useState<UserRole[]>([]);
  const [availableRoles, setAvailableRoles] = useState<UserRole[]>([]);

  const { data: userData = [], isLoading } = useUsers();
  const { data: allAvailableRoles = [], isLoading: rolesLoading } =
    useUserRoles();
  const user = userData[0];

  useEffect(() => {
    if (user?.usersRole?.length) {
      const activeRole = user?.usersRole?.find(
        (role) => role.status === "Active"
      );

      setSelected(activeRole?.role ?? "");
    }
  }, [user]);

  useEffect(() => {
    if (user && allAvailableRoles.length > 0) {
      // Filter out roles that the user already has
      const userRoleNames = user.usersRole.map((role) => role.role);
      const availableForUser = allAvailableRoles.filter(
        (role) => !userRoleNames.includes(role.name)
      );
      setAvailableRoles(availableForUser);
    }
  }, [user, allAvailableRoles]);

  const handleAddRole = () => {
    if (availableRoles.length > 0) {
      // Add the first available role to the added roles
      const roleToAdd = availableRoles[0];
      setAddedRoles((prev) => [...prev, roleToAdd]);
      // Remove the added role from available roles
      setAvailableRoles((prev) => prev.slice(1));
    }
  };

  if (isLoading || rolesLoading) return <Loader />;
  if (!user?.usersRole?.length) return <div>No roles found</div>;

  const existingRoles = user.usersRole.map((role) => ({
    value: role.role,
    label: role.role,
    lastActive: role.updatedAt
      ? formatDate(role.updatedAt, "monthYear")
      : "N/A",
    defaultChecked: role.status === "Active",
  }));

  const addedRoleOptions = addedRoles.map((role) => ({
    value: role.name,
    label: role.name,
    lastActive: role.updatedAt
      ? formatDate(role.updatedAt, "monthYear")
      : "N/A",
    defaultChecked: false,
  }));

  const allDisplayRoles = [...existingRoles, ...addedRoleOptions];

  return (
    <section className="flex gap-3 md:gap-8 mb-8 max-sm:flex-col">
      <div className="flex flex-col">
        <h3 className="text-sm font-medium mb-1">Active Role</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Select active role available to the user.
        </p>
      </div>

      <div className="flex flex-col flex-1 gap-4">
        <RoleRadioGroup
          roles={allDisplayRoles}
          selected={selected}
          onChange={setSelected}
        />

        {availableRoles.length > 0 && (
          <Button
            variant="link"
            className="flex items-center gap-2 text-sm text-[#7F56D9] !no-underline cursor-pointer font-medium hover:opacity-80 w-max"
            onClick={handleAddRole}
          >
            <Plus className="size-5" />
            Add role to user
          </Button>
        )}
      </div>
    </section>
  );
}

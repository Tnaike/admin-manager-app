import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoleRadioGroup } from "./RoleRadioGroup";
import { useUsers } from "@/hooks/user";
import { formatDate } from "@/lib/utils";
import { Loader } from "@/components/ui/loader";

export function ActiveRoleSection() {
  const [selected, setSelected] = useState("");

  const { data: userData = [], isLoading } = useUsers();
  const user = userData[0];

  useEffect(() => {
    if (user?.usersRole?.length) {
      const activeRole = user.usersRole.find(
        (role) => role.status === "Active"
      );
      if (activeRole) {
        setSelected(activeRole.role);
      }
    }
  }, [user]);

  if (isLoading) return <Loader />;
  if (!user?.usersRole?.length) return <div>No roles found</div>;

  const roles = user.usersRole.map((role) => ({
    value: role.role,
    label: role.role,
    lastActive: role.updatedAt
      ? formatDate(role.updatedAt, "monthYear")
      : "N/A",
    defaultChecked: role.status === "Active",
  }));

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
          roles={roles}
          selected={selected}
          onChange={setSelected}
        />

        <Button
          variant="link"
          className="flex items-center gap-2 text-sm text-[#7F56D9] !no-underline cursor-pointer font-medium hover:opacity-80 w-max"
          onClick={() => {}}
        >
          <Plus className="size-5" /> Add role to user
        </Button>
      </div>
    </section>
  );
}

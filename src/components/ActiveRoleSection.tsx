import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoleRadioGroup, type Role } from "./RoleRadioGroup";

const roles: Role[] = [
  {
    value: "superadmin",
    label: "Superadmin",
    lastActive: "06/2023",
    defaultChecked: true,
  },
  {
    value: "developeradmin",
    label: "Developeradmin",
    lastActive: "01/2023",
  },
  {
    value: "supportadmin",
    label: "Supportadmin",
    lastActive: "10/2022",
  },
];

export function ActiveRoleSection() {
  const [selected, setSelected] = useState("superadmin");

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

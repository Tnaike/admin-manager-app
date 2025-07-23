import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Users, Plus } from "lucide-react";
import { Button } from "./ui/button";
import Checked from "@/assets/checked.svg";
import Unchecked from "@/assets/unchecked.svg";

const roles = [
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
        <RadioGroup
          value={selected}
          onValueChange={setSelected}
          className="flex flex-col gap-4"
        >
          {roles.map((role) => {
            const isSelected = selected === role.value;

            return (
              <label
                key={role.value}
                className={cn(
                  "flex items-start gap-4 border rounded-xl p-4 cursor-pointer transition-all",
                  isSelected
                    ? "border-[#D6BBFB] bg-[#F9F5FF] shadow-sm"
                    : "border-[#EAECF0] bg-white"
                )}
              >
                <RadioGroupItem value={role.value} className="mt-1 hidden" />

                <div className="flex items-start gap-3 flex-1">
                  <span className="bg-white border border-[#F2F4F7] text-[#667085] rounded-md p-2 px-3">
                    <Users className="w-6 h-6" />
                  </span>

                  <div>
                    <div
                      className={cn(
                        "text-sm font-medium mb-1",
                        isSelected && "text-[#7F56D9]"
                      )}
                    >
                      {role.label}
                    </div>
                    <div
                      className={cn(
                        "text-xs mb-1",
                        isSelected ? "text-[#7F56D9]" : "text-muted-foreground"
                      )}
                    >
                      Last active {role.lastActive}
                    </div>
                    <div className="flex gap-3 text-xs">
                      <Button
                        variant="link"
                        className="text-[#7F56D9] p-0 h-max cursor-pointer"
                      >
                        Set as default
                      </Button>
                      <Button
                        variant="link"
                        className="text-[#7F56D9] p-0 h-max cursor-pointer"
                      >
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>

                <img
                  src={isSelected ? Checked : Unchecked}
                  alt="Checked state icon"
                  className="size-4"
                />
              </label>
            );
          })}
        </RadioGroup>

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

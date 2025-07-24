import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { cn } from "@/lib/utils";
import Checked from "@/assets/checked.svg";
import Unchecked from "@/assets/unchecked.svg";

export type Role = {
  value: string;
  label: string;
  lastActive: string;
  defaultChecked?: boolean;
};

type RoleRadioGroupProps = {
  roles: Role[];
  selected: string;
  onChange: (value: string) => void;
};

export const RoleRadioGroup = ({
  roles,
  selected,
  onChange,
}: RoleRadioGroupProps) => {
  return (
    <RadioGroup
      value={selected}
      onValueChange={onChange}
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
                    className={cn(
                      "p-0 h-max cursor-pointer",
                      isSelected ? "text-[#7F56D9]" : "text-muted-foreground"
                    )}
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
  );
};

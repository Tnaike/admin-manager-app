import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function ConnectedEmailSection() {
  const [value, setValue] = useState("alternative");

  return (
    <section className="flex gap-3 md:gap-8 mb-6 max-sm:flex-col">
      <div className="flex flex-col">
        <h3 className="text-sm font-medium mb-1">Connected email</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Select role account
        </p>
      </div>
      <div className="flex flex-col flex-1">
        <RadioGroup
          value={value}
          onValueChange={setValue}
          className="flex flex-col gap-3 mb-2"
        >
          <label className="flex items-start gap-2 cursor-pointer w-max">
            <RadioGroupItem value="account" id="account-email" />
            <div className="flex flex-col">
              <span className="text-sm font-medium">My account email</span>
              <span className="text-xs text-muted-foreground">
                james.smith@gmail.com
              </span>
            </div>
          </label>
          <label className="flex items-start gap-2 cursor-pointer">
            <RadioGroupItem value="alternative" id="alternative-email" />
            <div className="flex flex-col flex-1 gap-2">
              <span className="text-sm font-medium">An alternative email</span>
              {value === "alternative" && (
                <Input
                  type="email"
                  placeholder="Enter alternative email"
                  className="max-w-md"
                  prefixIcon={<Mail className="w-4 h-4 text-primary" />}
                />
              )}
            </div>
          </label>
        </RadioGroup>
      </div>
    </section>
  );
}

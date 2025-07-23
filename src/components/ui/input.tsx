import * as React from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react"; // Or your icon library

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixIcon?: React.ReactNode;
}

function Input({ name, className, type, prefixIcon, ...props }: InputProps) {
  const isSearchType = type === "search";
  const showIcon = prefixIcon || isSearchType;

  return (
    <div className="relative w-full">
      {showIcon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          {prefixIcon ?? <Search className="h-4 w-4" />}
        </div>
      )}
      <input
        type={type}
        name={name}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30",
          "border border-[#D0D5DD] bg-transparent shadow-xs transition-[color,box-shadow]",
          "flex h-11 w-full min-w-0 rounded-md px-3 py-1 text-base md:text-sm",
          "focus:outline-2 focus:outline-[#F4EBFF] focus-visible:border-[#D6BBFB] focus-visible:ring-[#D6BBFB]/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          showIcon && "pl-9",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { Input };

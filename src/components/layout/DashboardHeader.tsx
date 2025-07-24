import React from "react";

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
}

export function DashboardHeader({ title, subtitle }: DashboardHeaderProps) {
  return (
    <div className="mb-6 max-sm:px-4">
      <h2 className="text-xl sm:text-3xl font-medium text-[#101828] mb-1">
        {title}
      </h2>
      {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

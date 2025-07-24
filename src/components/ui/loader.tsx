import React from "react";
import { Loader2Icon } from "lucide-react";

export function Loader() {
  return (
    <div className="flex items-center justify-center py-8">
      <Loader2Icon className="animate-spin size-6 text-muted-foreground" />
    </div>
  );
}

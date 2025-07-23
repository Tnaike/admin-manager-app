import React from "react";
import { Button } from "@/components/ui/button";

export function NewFeaturesCard() {
  return (
    <div className="bg-[#F9FAFB] rounded-lg p-4 py-5 mb-6">
      <p className="text-xs sm:text-sm font-medium mb-1">
        New features available!
      </p>
      <p className="text-xs sm:text-sm text-muted-foreground mb-2">
        Check out the new dashboard view. Pages now load faster.
      </p>
      <img
        src="https://res.cloudinary.com/dt9rspla9/image/upload/v1753239917/sidebar-features_t7myfn.jpg"
        alt="New feature"
        className="w-full h-32 object-cover rounded-md my-2 sm:my-3"
      />
      <div className="flex items-center gap-3 text-xs">
        <Button
          variant="ghost"
          className="text-[#667085] text-xs sm:text-sm p-0 h-max cursor-pointer"
          onClick={() => {}}
        >
          Dismiss
        </Button>
        <Button
          variant="ghost"
          className="text-[#7F56D9] sm:text-sm p-0 h-max cursor-pointer"
          onClick={() => {}}
        >
          What's new?
        </Button>
      </div>
    </div>
  );
}

import React from "react";
import { LogOut } from "lucide-react";

export default function Logout() {
  return (
    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
      <img
        src="https://res.cloudinary.com/dt9rspla9/image/upload/v1693746275/sabi/Male-avatar.svg"
        alt="James Smith"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex-1 gap-1.5 items-start max-w-40 text-ellipsis overflow-hidden">
        <p className="text-sm font-medium leading-none">James Smith</p>
        <p className="text-xs text-muted-foreground">james.smith@gmail.com</p>
      </div>
      <button
        type="button"
        className="text-muted-foreground hover:text-primary p-1 transition cursor-pointer"
        onClick={() => alert("Logout clicked")}
      >
        <LogOut className="w-5 h-5" />
      </button>
    </div>
  );
}

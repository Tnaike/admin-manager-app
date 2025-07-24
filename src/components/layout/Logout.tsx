import React from "react";
import { LogOut } from "lucide-react";

type LogoutProps = {
  name: string;
  email: string;
  photo: string;
};

export default function Logout({ name, email, photo }: LogoutProps) {
  const fallback =
    "https://res.cloudinary.com/dt9rspla9/image/upload/v1693746275/sabi/Male-avatar.svg";
  const userPhoto = photo || fallback;

  return (
    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
      <img
        src={userPhoto}
        alt={name || "User Avatar"}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex-1 gap-1.5 items-start max-w-40 text-ellipsis overflow-hidden">
        <p className="text-sm font-medium leading-none">{name || "Guest"}</p>
        <p className="text-xs text-muted-foreground">{email || ""}</p>
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

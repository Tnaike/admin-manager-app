import React, { useState } from "react";
import {
  ChartNoAxesColumn,
  Layers,
  SquareCheckBig,
  Flag,
  Users,
  LifeBuoy,
  Settings,
  Home,
  Text,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import Logo from "@/assets/logo.svg";
import { NewFeaturesCard } from "@/components/layout/NewFeaturesCard";
import Logout from "./Logout";
import { useUsers } from "@/hooks/user";

const menu = [
  { label: "Home", icon: Home },
  { label: "Dashboard", icon: ChartNoAxesColumn, badge: 10 },
  { label: "Projects", icon: Layers },
  { label: "Tasks", icon: SquareCheckBig },
  { label: "Reporting", icon: Flag },
  { label: "Users", icon: Users },
  { label: "Support", icon: LifeBuoy },
  { label: "Settings", icon: Settings },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const { data: userRoles = [] } = useUsers();
  const { email, name, photo } = userRoles[0] || {};

  return (
    <>
      {/* Top bar for mobile */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-3 bg-white border-b">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-8 h-8 rounded-lg" />
          <span className="font-semibold text-lg">Admin Manager</span>
        </div>
        <button onClick={() => setIsOpen(true)} aria-label="Open sidebar">
          <Text className="w-7 h-7" />
        </button>
      </div>
      {/* Sidebar overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          {/* Sidebar drawer */}
          <aside className="relative w-72 h-full bg-white border-r flex flex-col justify-between min-h-screen px-4 py-8 animate-slide-in-left">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 md:hidden"
              onClick={() => setIsOpen(false)}
              aria-label="Close sidebar"
            >
              <X className="w-6 h-6" />
            </button>
            {/* Logo and App Name */}
            <div className="flex items-center gap-2 mb-6">
              <img src={Logo} alt="Logo" className="w-8 h-8 rounded-lg" />
              <span className="font-semibold text-lg">Admin Manager</span>
            </div>
            {/* Search Input */}
            <Input
              type="search"
              name="search"
              placeholder="Search..."
              className="mb-6 bg-white focus:outline-4 focus-visible:ring-0 focus-visible:border-[#D6BBFB]"
            />
            {/* Navigation */}
            <div className="flex flex-col overflow-y-auto pb-2 no-scrollbar max-h-[calc(100vh-15rem)]">
              <nav className="space-y-1 mb-6">
                {menu.map(({ label, icon: Icon, badge }) => (
                  <div
                    key={label}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-[#F9FAFB]",
                      label === "Settings" &&
                        "bg-[#F9FAFB] text-foreground font-medium"
                    )}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="flex-1 text-base">{label}</span>
                    {badge && (
                      <span className="ml-auto text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground font-medium">
                        {badge}
                      </span>
                    )}
                  </div>
                ))}
              </nav>
              {/* New Features Card */}
              <NewFeaturesCard />
            </div>
            <Logout name={name} email={email} photo={photo} />
          </aside>
        </div>
      )}
      {/* Sidebar for desktop */}
      <aside className="w-72 h-full border-r bg-white flex-col justify-between min-h-screen px-4 py-8 hidden md:flex">
        <div>
          {/* Logo and App Name */}
          <div className="flex items-center gap-2 mb-6">
            <img src={Logo} alt="Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-semibold text-lg">Admin Manager</span>
          </div>
          {/* Search Input */}
          <Input
            type="search"
            name="search"
            placeholder="Search..."
            className="mb-6 bg-white focus:outline-4 focus-visible:ring-0 focus-visible:border-[#D6BBFB]"
          />
          {/* Navigation */}
          <div className="flex flex-col overflow-y-auto pb-2 no-scrollbar max-h-[calc(100vh-15rem)]">
            <nav className="space-y-1 mb-6">
              {menu.map(({ label, icon: Icon, badge }) => (
                <div
                  key={label}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-[#F9FAFB]",
                    label === "Settings" &&
                      "bg-[#F9FAFB] text-foreground font-medium"
                  )}
                >
                  <Icon className="w-6 h-6" />
                  <span className="flex-1 text-base">{label}</span>
                  {badge && (
                    <span className="ml-auto text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground font-medium">
                      {badge}
                    </span>
                  )}
                </div>
              ))}
            </nav>
            {/* New Features Card */}
            <NewFeaturesCard />
          </div>
        </div>
        {/* Logout User Profile */}
        <Logout name={name} email={email} photo={photo} />
      </aside>
    </>
  );
}

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ConnectedEmailSection } from "@/components/ConnectedEmailSection";
import { ActiveRoleSection } from "@/components/ActiveRoleSection";
import { UserRolesTable } from "@/components/UserRolesTable";

const tabItems = [
  "My details",
  "Profile",
  "Password",
  "Team",
  "Plan",
  "Roles",
  "Notifications",
  "Integrations",
  "API",
];

interface MainLayoutProps {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="w-full">
      <Tabs defaultValue="Roles" className="mb-8">
        <TabsList className="flex flex-row gap-0 h-10 bg-white border border-[#D0D5DD] p-0 w-fit">
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="rounded-none border-0 border-r border-[#D0D5DD] last:border-r-0 px-4 py-2 text-sm font-medium data-[state=active]:bg-muted data-[state=active]:text-primary"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      {/* User Roles Section */}
      <section className="mb-8 max-sm:px-4">
        <h2 className="text-lg font-semibold mb-1">User Roles</h2>
        <p className="text-sm text-muted-foreground mb-6">Update your roles details and information.</p>
        <hr className="mb-8 border-gray-200" />
        <ConnectedEmailSection />
        <hr className="mb-8 border-gray-200" />
        <ActiveRoleSection />
      </section>
      <UserRolesTable />
      {children}
    </div>
  );
}

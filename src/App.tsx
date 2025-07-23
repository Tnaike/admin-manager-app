import React from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-gray-50 py-8 sm:px-8">
        <div className="w-full">
          <DashboardHeader
            title="Settings"
            subtitle="Manage your team and preferences here."
          />
          <MainLayout />
        </div>
      </main>
    </div>
  );
}

export default App;

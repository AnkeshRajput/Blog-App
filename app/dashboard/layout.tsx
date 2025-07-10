import LeftSidebar from "@/components/dashboard/left-sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <LeftSidebar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;

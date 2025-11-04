import { Navbar } from "@/components/ui/home/header/Navbar";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
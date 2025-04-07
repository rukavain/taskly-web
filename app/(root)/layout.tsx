"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/common/Sidebar/Sidebar";
import Search from "@/components/common/Search/Search";
const publicUrl = ["/auth/login", "/auth/register"];
const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();

  return (
    <main className="h-full w-full">
      <div className="flex justify-start items-start w-full h-full">
        {!publicUrl.includes(pathName) && <Sidebar />}
        <div className="flex flex-col h-full w-full jusitfy-start items-start">
          {!publicUrl.includes(pathName) && <Search />}
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;

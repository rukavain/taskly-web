"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { logoutUser } from "@/lib/axios";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

const Search = async () => {
  const { toast } = useToast();
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLogout = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      logoutUser();
      console.log(`session_id logged out`);
      toast({
        description: "Successfully logged out.",
      });
      router.push("auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  const userResponse = await localStorage.getItem("user");

  const user = userResponse && JSON.parse(userResponse);
  console.log(user);

  return (
    <div className="DMSans  w-full py-4 px-3 flex justify-between items-center">
      <div className="relative max-w-3xl w-full flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="absolute left-9 text-gray-500 top-1/2 transform -translate-y-1/2 lucide lucide-search-icon lucide-search"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="search"
          name=""
          id=""
          placeholder="Search"
          className="w-full rounded-xl py-3 pl-20 pr-4  focus:outline-none"
        />
      </div>
      <div className="flex justify-center items-center gap-4 ">
        <div className="relative cursor-pointer group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-bell-icon lucide-bell text-gray-700"
          >
            <path d="M10.268 21a2 2 0 0 0 3.464 0" />
            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
          </svg>
          <p className="text-blue-600 font-extrabold text-4xl absolute bottom-3 right-1">
            .
          </p>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-200 text-xs absolute top-7 bg-gray-500 rounded-lg py-1 px-2 z-20">
            Tooltip
          </p>
        </div>
        <div
          className="flex relative justify-start items-center h-full gap-2 cursor-pointer bg-white shadow-sm rounded-xl p-2"
          onClick={toggleMenu}
        >
          <div className="rounded-full ">
            <Image
              src="/placeholders/profile-icon.png"
              alt="Profile Icon"
              width={38}
              className="rounded-full cursor-pointer"
              height={38}
            />
          </div>
          <div className="flex flex-col justify-start items-start h-full ">
            <p className="text-sm font-semibold">Lmao Hahaha</p>
            <p className="text-gray-500 text-xs">Project Leader</p>
          </div>
          <div
            className={`flex flex-col justify-start items-start gap-1 absolute text-sm py-2 px-4 top-16 left-0 w-full text-left opacity-0  text-gray-700 bg-white border border-gray-300 rounded-md shadow-md transition-opacity duration-200 ${
              showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Link href="">Profile</Link>
            <AlertDialog>
              <AlertDialogTrigger className="text-red-500 w-full text-left">
                Logout
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogCancel>
                    <button className="text-red-600" onClick={handleLogout}>
                      Logout
                    </button>
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

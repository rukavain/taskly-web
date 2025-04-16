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
import { Switch } from "@/components/ui/switch";

const Search = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
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

  const userResponse = localStorage.getItem("user");

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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
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
        <Switch />

        <div
          className="relative cursor-pointer"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <div className="bg-white p-1 rounded-full shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${
                showNotifications && "fill-blue-600"
              }lucide lucide-bell-icon lucide-bell text-gray-900 `}
            >
              <path d="M10.268 21a2 2 0 0 0 3.464 0" />
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
            </svg>
          </div>
          <p className="text-blue-600 font-extrabold text-4xl absolute bottom-3 right-1">
            .
          </p>
          {showNotifications && (
            <div className="absolute mt-2 right-1 text-gray-200 rounded-l-xl flex flex-col justify-start items-start gap-2 min-w-80 rounded-b-xl bg-gray-800  py-5 px-4 z-20">
              <p className="text-xl font-semibold">Notifications</p>
              <div className="justify-self-start text-left flex justify-start items-center gap-3 w-full ">
                <p className="text-left font-bold py-1 px-4 rounded-md bg-gray-300 text-gray-900">
                  All
                </p>
                <p className="text-left">Unread</p>
              </div>
              <div className="w-full  flex flex-col justify-start items-start">
                <div className="w-full flex justify-center items-center gap-6 mb-2 hover:bg-gray-700 transition-all p-1 rounded-md">
                  <div className="rounded-full p-2">
                    <Image
                      src="/placeholders/profile-icon.png"
                      alt="Profile Icon"
                      width={40}
                      height={40}
                      className="rounded-full cursor-pointer min-w-max"
                    />
                  </div>
                  <p className="w-full text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="text-gray-400 text-xs">22h</p>
                </div>
                <div className="w-full flex justify-center items-center gap-6 mb-2 hover:bg-gray-700 transition-all p-1 rounded-md">
                  <div className="rounded-full p-2">
                    <Image
                      src="/placeholders/profile-icon.png"
                      alt="Profile Icon"
                      width={40}
                      height={40}
                      className="rounded-full cursor-pointer min-w-max"
                    />
                  </div>
                  <p className="w-full text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="text-gray-400 text-xs">22h</p>
                </div>
                <div className="w-full flex justify-center items-center gap-6 mb-2 hover:bg-gray-700 transition-all p-1 rounded-md">
                  <div className="rounded-full p-2">
                    <Image
                      src="/placeholders/profile-icon.png"
                      alt="Profile Icon"
                      width={40}
                      height={40}
                      className="rounded-full cursor-pointer min-w-max"
                    />
                  </div>
                  <p className="w-full text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="text-gray-400 text-xs">22h</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative cursor-pointer" onClick={toggleMenu}>
          <div className="rounded-full ">
            <Image
              src="/placeholders/profile-icon.png"
              alt="Profile Icon"
              width={38}
              className="rounded-full cursor-pointer"
              height={38}
            />
          </div>
          <div
            className={`flex flex-col justify-start items-start gap-1 absolute text-sm py-2 px-4 top-12 right-2 min-w-max w-full text-left opacity-0  text-gray-700 bg-white border border-gray-300 rounded-md shadow-md transition-opacity duration-200 ${
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

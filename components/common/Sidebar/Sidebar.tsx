import React from "react";
import Link from "next/link";
const Sidebar = () => {
  return (
    <nav className="flex DMSans h-full border flex-col py-6 justify-between items-start bg-white min-w-60">
      <Link href="/" className="px-4 flex justify-center items-center gap-4">
        <h1 className="text-white text-center flex justify-center items-center bg-blue-600 text-2xl py-2 px-4 font-bold rounded-full">
          T
        </h1>
        <p className="text-xl text-gray-700 tracking-wider">TASKIE</p>
      </Link>
      <div className="flex flex-col justify-start items-start w-full">
        <ul className="flex flex-col gap-1 py-4 w-full">
          <Link
            href="/"
            className="text-gray-500  flex justify-start items-center gap-4 hover:bg-blue-100 hover:text-blue-600 transition-all ease-in-out duration-300 w-full px-4 py-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-layout-grid-icon lucide-layout-grid "
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
            <p className=" text-md">Home</p>
          </Link>
          <Link
            href="/projects"
            className="text-gray-500 flex justify-start  items-center gap-5 hover:bg-blue-100 hover:text-blue-600 transition-all ease-in-out duration-300 w-full px-4 py-2 cursor-pointer"
          >
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
              className="lucide lucide-box-icon lucide-box"
            >
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
              <path d="m3.3 7 8.7 5 8.7-5" />
              <path d="M12 22V12" />
            </svg>
            <p className=" text-md">Projects</p>
          </Link>
          <Link
            href="/team"
            className="text-gray-500 flex justify-start items-center gap-5 hover:bg-blue-100 hover:text-blue-600 transition-all ease-in-out duration-300 w-full px-4 py-2 cursor-pointer"
          >
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
              className="lucide lucide-users-icon lucide-users"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <p className=" text-md">Team</p>
          </Link>
          <Link
            href="/messages"
            className="text-gray-500 flex justify-start items-center gap-5 hover:bg-blue-100 hover:text-blue-600 transition-all ease-in-out duration-300 w-full px-4 py-2 cursor-pointer"
          >
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
              className="lucide lucide-message-square-text-icon lucide-message-square-text"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <path d="M13 8H7" />
              <path d="M17 12H7" />
            </svg>
            <p className=" text-md">Messages</p>
          </Link>
          <Link
            href="/settings"
            className="text-gray-500 flex justify-start items-center gap-5 hover:bg-blue-100 hover:text-blue-600 transition-all ease-in-out duration-300 w-full px-4 py-2 cursor-pointer"
          >
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
              className="lucide lucide-settings-icon lucide-settings"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <p className=" text-md">Settings</p>
          </Link>
        </ul>
      </div>
      <button className="flex self-center w-full max-w-44 justify-center items-center gap-4 bg-blue-600 rounded-xl p-2 text-white hover:bg-blue-700 transition-all ease-in-out duration-300">
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
          className="lucide lucide-plus-icon lucide-plus"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
        <p className="text-sm">Add New</p>
      </button>
    </nav>
  );
};

export default Sidebar;

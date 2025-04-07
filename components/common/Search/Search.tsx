import React from "react";
import Image from "next/image";
const Search = () => {
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
        <div className="relative">
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
        </div>
        <div className="flex justify-start items-center h-full  gap-2">
          <div className="rounded-full">
            <Image
              src="/placeholders/profile-icon.png"
              alt="Profile Icon"
              width={38}
              className="rounded-full"
              height={38}
            />
          </div>
          <div className="flex flex-col justify-start items-start h-full ">
            <p className="text-sm font-semibold">Lmao Hahaha</p>
            <p className="text-gray-500 text-xs">Project Leader</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

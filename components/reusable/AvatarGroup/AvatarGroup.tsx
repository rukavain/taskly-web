import React from "react";

const AdminNavbar = () => {
  const profile = [1, 2, 3, 4, 5, 6];
  const maxVisibleProfiles = 4;
  return (
    <div className="flex items-center">
      {profile.slice(0, maxVisibleProfiles).map((item, index) => (
        <div
          key={index}
          className={`h-[50px] w-[50px] bg-primary rounded-full ${
            index === 0 ? "ml-0" : "-ml-4"
          } border-2 border-white z-[${index}]`}
        ></div>
      ))}

      {profile.length > maxVisibleProfiles && (
        <div className="h-[50px] w-[50px] bg-gray-200 rounded-full -ml-4 border-2 border-white flex items-center justify-center">
          <span className="text-sm font-semibold">
            +{profile.length - maxVisibleProfiles}
          </span>
        </div>
      )}
    </div>
  );
};

export default AdminNavbar;

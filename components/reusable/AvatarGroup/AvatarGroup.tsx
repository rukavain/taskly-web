import { StaticImageData } from "next/image";
import React from "react";

const AvatarGroup: React.FC<{ profile: StaticImageData[] }> = ({ profile }) => {
  const maxVisibleProfiles = 4;
  return (
    <div className="flex items-center">
      {profile.slice(0, maxVisibleProfiles).map((item, index) => (
        <div
          key={index}
          className={`h-[30px] w-[30px] bg-primary rounded-full ${
            index === 0 ? "ml-0" : "-ml-2"
          } border-2 border-white z-[${index}]`}
        ></div>
      ))}

      {profile.length > maxVisibleProfiles && (
        <div className="h-[30px] w-[30px] bg-gray-200 rounded-full -ml-2 border-2 border-white flex items-center justify-center">
          <span className="text-sm font-semibold">
            +{profile.length - maxVisibleProfiles}
          </span>
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;

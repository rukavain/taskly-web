import React from "react";
import Image, { StaticImageData } from "next/image";

interface AvatarDataType {
  profilePicture: StaticImageData;
  name: string;
}

const Avatar: React.FC<{ data: AvatarDataType[] }> = ({ data }) => {
  return (
    <div>
      {data &&
        data.map((item, index) => (
          <div
            key={index}
            className="flex w-max h-max justify-center items-center flex-col relative group transition-all delay-100 cursor-wait"
          >
            <Image
              src={item.profilePicture}
              alt="profile picture"
              width={50}
              height={50}
              className="rounded-full"
            ></Image>
            <p className="py-1 px-3 text-white text-xs bg-gray-800 rounded-xl absolute hidden -top-7 group-hover:block min-w-max transition-all delay-100">
              {item.name}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Avatar;

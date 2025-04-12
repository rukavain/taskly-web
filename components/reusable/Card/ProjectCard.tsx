import AvatarGroup from "@/components/reusable/AvatarGroup/AvatarGroup";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Progress from "../Progress/Progress";

interface ProjectDataType {
  project_name: string;
  deadline: string;
  description: string;
  members_image: StaticImageData[];
  project_icon: StaticImageData;
  progress: number;
}

const ProjectCard: React.FC<{ data: ProjectDataType[] }> = ({ data }) => {
  return (
    <div className="flex gap-2 ">
      {data &&
        data.map((item, key) => (
          <div
            key={key}
            className="flex flex-col justify-start items-start border-2 rounded-md py-4 px-2 border-gray-300 shadow-md w-full max-w-xs bg-white"
          >
            <div className="flex justify-between items-center w-full border-b border-gray-200 pb-2">
              <div>
                <p>{item.project_name}</p>
                <div className="flex justify-center items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>

                  <p className="text-xs text-gray-400">{item.deadline}</p>
                </div>
              </div>
              <Image
                src={item.project_icon}
                alt=""
                width={50}
                height={50}
                className="rounded-full"
              ></Image>
            </div>
            <div className="flex justify-start items-start flex-col gap-4 pt-3">
              <p>Description</p>
              <p className="text-xs text-gray-500 text-ellipsis line-clamp-4">
                {item.description}
              </p>
            </div>
            <div className="w-full  flex justify-between items-start mt-2">
              <div>
                <p className="text-base text-gray-700">Teams:</p>
                <div className="flex justify-start items-start">
                  <AvatarGroup profile={item.members_image} />
                </div>
              </div>
              <div className="flex justify-between items-center min-w-max self-end">
                <Progress score={item.progress} bigger={false} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProjectCard;

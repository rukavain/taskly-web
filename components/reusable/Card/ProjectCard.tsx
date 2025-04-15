import Image, { StaticImageData } from "next/image";
import React from "react";
import image from "@/components/constants/image";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import AvatarGroup from "../AvatarGroup/AvatarGroup";
import Progress from "../Progress/Progress";
interface ProjectDataType {
  project_name: string;
  deadline: string;
  description: string;
  members_image: StaticImageData[];
  project_icon: StaticImageData;
  progress: number;
}

const projectData: ProjectDataType[] = [
  {
    project_name: "To Do",
    deadline: "14 February 2025",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry",
    members_image: [
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
    ],
    project_icon: image.profile.profile,
    progress: 20,
  },
  {
    project_name: "To Do",
    deadline: "14 February 2025",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry",
    members_image: [
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
    ],
    project_icon: image.profile.profile,
    progress: 50,
  },

  {
    project_name: "To Do",
    deadline: "14 February 2025",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry dummy text ever since the 1500s. Lorem Ipsum has been the industry",
    members_image: [
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
      image.profile.profile,
    ],
    project_icon: image.profile.profile,
    progress: 90,
  },
];

const ProjectCard: React.FC<{ data: ProjectDataType[] }> = ({ data }) => {
  return (
    <div className="flex gap-2">
      {data &&
        data.map((item, key) => (
          <Drawer>
            <DrawerTrigger className="">
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
            </DrawerTrigger>
            <DrawerContent side="right">
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader className="flex flex-col justify-start items-start gap-4 text-center">
                  <DrawerTitle className="text-6xl font-bold tracking-tighter">
                    {"Project"}
                  </DrawerTitle>
                  <DrawerDescription className="text-left mt-4">
                    Integrate backend to the frontend for both mobile and web
                    platforms.
                  </DrawerDescription>
                  <DrawerDescription className="text-left gap-4 flex flex-col justify-center items-center  min-w-min h-max">
                    <p className="text-left self-start text-base font-semibold text-gray-800">
                      Members:
                    </p>
                    <div className="flex flex-col gap-4 min-h-min">
                      <div className="flex w-max h-max justify-center items-center gap-1  group transition-all delay-100 ">
                        <Image
                          src={image.profile.profile}
                          alt=""
                          width={30}
                          height={30}
                          className="rounded-full"
                        ></Image>
                        <p className="py-1 px-3 text-gray-700 font-semibold rounded-xl  min-w-max">
                          John Doe
                        </p>
                        <p className="bg-gray-800 text-white py-1 px-3 text-xs rounded-full">
                          Project leader
                        </p>
                      </div>
                      <div className="flex w-max h-max justify-center items-center gap-1  group transition-all delay-100 ">
                        <Image
                          src={image.profile.profile}
                          alt=""
                          width={30}
                          height={30}
                          className="rounded-full"
                        ></Image>
                        <p className="py-1 px-3 text-gray-700 font-semibold rounded-xl  min-w-max">
                          John Doe
                        </p>
                      </div>
                      <div className="flex w-max h-max justify-center items-center gap-1  group transition-all delay-100 ">
                        <Image
                          src={image.profile.profile}
                          alt=""
                          width={30}
                          height={30}
                          className="rounded-full"
                        ></Image>
                        <p className="py-1 px-3 text-gray-700 font-semibold rounded-xl  min-w-max">
                          John Doe
                        </p>
                      </div>
                      <div className="flex w-max h-max justify-center items-center gap-1  group transition-all delay-100 ">
                        <Image
                          src={image.profile.profile}
                          alt=""
                          width={30}
                          height={30}
                          className="rounded-full"
                        ></Image>
                        <p className="py-1 px-3 text-gray-700 font-semibold rounded-xl  min-w-max">
                          John Doe
                        </p>
                      </div>
                      <div className="flex w-max h-max justify-center items-center gap-1  group transition-all delay-100 ">
                        <Image
                          src={image.profile.profile}
                          alt=""
                          width={30}
                          height={30}
                          className="rounded-full"
                        ></Image>
                        <p className="py-1 px-3 text-gray-700 font-semibold rounded-xl  min-w-max">
                          John Doe
                        </p>
                      </div>
                      <div className="flex w-max h-max justify-center items-center gap-1  group transition-all delay-100 ">
                        <Image
                          src={image.profile.profile}
                          alt=""
                          width={30}
                          height={30}
                          className="rounded-full"
                        ></Image>
                        <p className="py-1 px-3 text-gray-700 font-semibold rounded-xl  min-w-max">
                          John Doe
                        </p>
                      </div>
                      <div className="flex w-max h-max justify-center items-center gap-1  group transition-all delay-100 ">
                        <Image
                          src={image.profile.profile}
                          alt=""
                          width={30}
                          height={30}
                          className="rounded-full"
                        ></Image>
                        <p className="py-1 px-3 text-gray-700 font-semibold rounded-xl  min-w-max">
                          John Doe
                        </p>
                      </div>
                    </div>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose className="w-full border">
                    <Button variant="outline" className="w-full">
                      Cancel
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        ))}
    </div>

    // <div className="flex gap-2">
    //   {data &&
    //     data.map((item, key) => (

    //     ))}
    // </div>
  );
};

export default ProjectCard;

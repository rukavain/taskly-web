"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import TaskCard from "@/components/reusable/Card/TaskCard/TaskCard";
import image from "@/components/constants/image";
import Image, { StaticImageData } from "next/image";
import Progress from "@/components/reusable/Progress/Progress";
import ProjectCard from "@/components/reusable/Card/ProjectCard";
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
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

// interface AvatarDataType {
//   profilePicture: StaticImageData;
//   name: string;
// }

interface TaskDataType {
  status: string;
  project_name: string;
  task_name: string;
  assignee_image: StaticImageData;
  priority: "High" | "Medium" | "Low";
}

interface ProjectDataType {
  project_name: string;
  deadline: string;
  description: string;
  members_image: StaticImageData[];
  project_icon: StaticImageData;
  progress: number;
}

// const avatarData: AvatarDataType[] = [
//   {
//     profilePicture: image.profile.profile,
//     name: "John Doe",
//   },
//   {
//     profilePicture: image.profile.profile,
//     name: "John Doe",
//   },
//   {
//     profilePicture: image.profile.profile,
//     name: "John Doe",
//   },
//   {
//     profilePicture: image.profile.profile,
//     name: "John Doe",
//   },
//   {
//     profilePicture: image.profile.profile,
//     name: "John Doe",
//   },
//   {
//     profilePicture: image.profile.profile,
//     name: "John Doe",
//   },
// ];

const data: TaskDataType[] = [
  {
    status: "To Do",
    project_name: "Taskly",
    task_name: "Task 1",
    assignee_image: image.profile.profile,
    priority: "Low",
  },
  {
    status: "To Do",
    project_name: "Taskly",
    task_name: "Task 1",
    assignee_image: image.profile.profile,
    priority: "Low",
  },
  {
    status: "To Do",
    project_name: "Taskly",
    task_name: "Task 1",
    assignee_image: image.profile.profile,
    priority: "Low",
  },
  {
    status: "To Do",
    project_name: "Taskly",
    task_name: "Task 1",
    assignee_image: image.profile.profile,
    priority: "Low",
  },
  {
    status: "To Do",
    project_name: "Taskly",
    task_name: "Task 1",
    assignee_image: image.profile.profile,
    priority: "Low",
  },
];

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

export default function Content(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("session_id")) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <div className=" w-full h-full DMSans p-3">
      <div className="w-full">
        <div className="text-gray-700">
          <p className="text-2xl font-semibold">Manage your daily tasks</p>
          <p className="text-lg">Today task</p>
        </div>
        <div className="flex gap-4 justify-start items-start w-full">
          <Drawer>
            <DrawerTrigger className="">
              <TaskCard data={data} />
            </DrawerTrigger>
            <DrawerContent side="bottom">
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader className="flex flex-col justify-center items-center gap-4 text-center">
                  <DrawerTitle className="text-6xl font-bold tracking-tighter">
                    {"Taskly"}
                  </DrawerTitle>
                  <DrawerDescription className="text-center">
                    Integrate backend to the frontend for both mobile and web
                    platforms.
                  </DrawerDescription>
                  <DrawerDescription className="text-center gap-4 flex flex-col justify-center items-center  min-w-min h-max">
                    <p className="text-base font-semibold text-gray-800">
                      Assignees:
                    </p>
                    <div className="flex gap-4 min-h-min">
                      <div className="flex w-max h-max justify-center items-center flex-col relative group transition-all delay-100 ">
                        <Image
                          src={image.profile.profile}
                          alt=""
                          width={50}
                          height={50}
                          className="rounded-full"
                        ></Image>
                        <p className="py-1 px-3 text-white text-xs bg-gray-800 rounded-xl absolute hidden -top-7 group-hover:block min-w-max transition-all delay-100">
                          John Doe
                        </p>
                      </div>
                      <div className="flex w-max h-max justify-center items-center flex-col relative group transition-all delay-100 ">
                        <Image
                          src={image.profile.profile}
                          alt=""
                          width={50}
                          height={50}
                          className="rounded-full"
                        ></Image>
                        <p className="py-1 px-3 text-white text-xs bg-gray-800 rounded-xl absolute hidden -top-7 group-hover:block min-w-max transition-all delay-100">
                          John Doe
                        </p>
                      </div>
                      <div className="flex w-max h-max justify-center items-center flex-col relative group transition-all delay-100 ">
                        <Image
                          src={image.profile.profile}
                          alt=""
                          width={50}
                          height={50}
                          className="rounded-full"
                        ></Image>
                        <p className="py-1 px-3 text-white text-xs bg-gray-800 rounded-xl absolute hidden -top-7 group-hover:block min-w-max transition-all delay-100">
                          John Doe
                        </p>
                      </div>
                      <div className="flex w-max h-max justify-center items-center flex-col relative group transition-all delay-100 ">
                        <Image
                          src={image.profile.profile}
                          alt=""
                          width={50}
                          height={50}
                          className="rounded-full"
                        ></Image>
                        <p className="py-1 px-3 text-white text-xs bg-gray-800 rounded-xl absolute hidden -top-7 group-hover:block min-w-max transition-all delay-100">
                          John Doe
                        </p>
                      </div>
                      <div className="flex w-max h-max justify-center items-center flex-col relative group transition-all delay-100 rounded-full bg-black/50">
                        <Image
                          src={image.profile.profile}
                          alt=""
                          width={50}
                          height={50}
                          className="rounded-full opacity-20"
                        ></Image>
                        <p className="py-1 px-3 text-white text-sm rounded-xl absolute flex justify-center items-center group-hover:block min-w-max transition-all delay-100">
                          +8
                        </p>
                        <div className="absolute -right-20 -top-20 delay-200 bg-gray-800 text-white text-xs hidden  flex-col justify-start p-2 rounded-md group-hover:flex min-w-max">
                          <p>John Doe</p>
                          <p>John Doe</p>
                          <p>John Doe</p>
                          <p>John Doe</p>
                          <p>John Doe</p>
                          <p>John Doe</p>
                          <p>John Doe</p>
                          <p>John Doe</p>
                          <p>John Doe</p>
                          <p>John Doe</p>
                        </div>
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
        </div>
      </div>
      <div className="w-full my-4 flex-col gap-4 flex ">
        <p className="text-gray-700 text-xl">Project</p>
        <Drawer>
          <DrawerTrigger className="">
            <ProjectCard data={projectData} />
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
      </div>
    </div>
  );
}

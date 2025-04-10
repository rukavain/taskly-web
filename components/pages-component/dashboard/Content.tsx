"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import TaskCard from "@/components/reusable/Card/TaskCard";
import image from "@/components/constants/image";
import { StaticImageData } from "next/image";
import Progress from "@/components/reusable/Progress/Progress";
import ProjectCard from "@/components/reusable/Card/ProjectCard";

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
          <TaskCard data={data} />
        </div>
      </div>
      <div className="w-full my-4 flex-col gap-4 flex border border-red-600">
        <p className="text-gray-700 text-xl">Project</p>
        <ProjectCard data={projectData} />
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/reusable/Card/Card";
import image from "@/components/constants/image";
import { StaticImageData } from "next/image";

interface DataType {
  status: string;
  project_name: string;
  task_name: string;
  assignee_image: StaticImageData;
  priority: "High" | "Medium" | "Low";
}
const data: DataType[] = [
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
          <Card data={data} />
        </div>
      </div>
      <p>b</p>
    </div>
  );
}

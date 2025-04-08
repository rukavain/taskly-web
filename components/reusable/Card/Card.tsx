import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface DataType {
  status: string;
  project_name: string;
  task_name: string;
  assignee_image: StaticImageData;
  priority: "High" | "Medium" | "Low";
}

const Card: React.FC<{ data: DataType[] }> = ({ data }) => {
  return (
    <div className="flex gap-4 w-full">
      {data.map((item, index) => (
        <div
          className="flex flex-col justify-start items-start gap-1 px-3 rounded-lg bg-white overflow-hidden min-w-56  pb-2 border-2"
          key={index}
        >
          <div className="text-xs self-end rounded-b-xl py-2 px-4  bg-blue-900 text-white">
            {item.status}
          </div>
          <div className="flex text-sm text-gray-600 justify-start items-center  w-full gap-4 ">
            {item.project_name}
            <p className="text-xs px-2 text-white rounded-full p-0.5 bg-green-700 text-center">
              {" "}
              {item.priority}
            </p>
          </div>
          <p className="text-lg text-gray-700">{item.task_name}</p>
          <div>
            <Image
              src={item.assignee_image}
              alt=""
              width={30}
              height={30}
              className="rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

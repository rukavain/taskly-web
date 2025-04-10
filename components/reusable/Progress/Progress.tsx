import React from "react";

interface ScoreCircleProps {
  score: number;
  bigger?: boolean;
}

const Progress: React.FC<ScoreCircleProps> = ({ score, bigger = false }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;

  const getColor = () => {
    if (score <= 40) return "red";
    if (score <= 70) return "orange";
    return "green";
  };

  return (
    <div className="p-2 border border-red-600 flex gap-1 justify-center items-center">
      <svg
        height={bigger ? "50" : "20"}
        width={bigger ? "50" : "20"}
        viewBox="0 0 100 100"
        className=" border rounded-full"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="lightgray"
          strokeWidth="20"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke={getColor()}
          strokeWidth="20"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
      </svg>

      <text
        x="50"
        y="55"
        textAnchor="middle"
        className="text-gray-700 text-xs font-semibold"
        fontSize="24"
        fill="black"
        fontWeight={600}
      >
        {score} %
      </text>
    </div>
  );
};

export default Progress;

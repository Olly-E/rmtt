import clsx from "clsx";
import React from "react";

const PROJECT_TYPES_DATA = [
  {
    name: "Time & Materials",
    id: "time-materials",
    desc: "Bill by the hour with billable rates",
  },
  {
    name: "Fixed Price",
    id: "fixed-price",
    desc: "Bill a set price, regardless of time tracked ",
  },
  {
    name: "Non-Billable",
    id: "non-billable",
    desc: "Not billed to a client",
  },
];

interface ProjectTypeSelectProps {
  selectedProjectType: string;
  setSelectedProjectType: React.Dispatch<React.SetStateAction<string>>;
}
export const ProjectTypeSelect = ({
  selectedProjectType,
//   setSelectedProjectType,
}: ProjectTypeSelectProps) => {
  return (
    <div className="flex mt-6">
      <p className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium">
        Project type
      </p>
      <div className="grid grid-cols-3 gap-4 w-full">
        {PROJECT_TYPES_DATA.map((projectType) => {
          return (
            <button
              type="button"
              key={projectType.id}
              className={clsx(
                "text-xs text-center h-[70px] px-4 flex flex-col border items-center justify-center rounded-md",
                selectedProjectType === projectType.id
                  ? "bg-white-3 border border-primary"
                  : "border-black-2/20"
              )}
            >
              <p className="font-medium text-base">{projectType.name}</p>
              <p className="text-xs">{projectType.desc}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

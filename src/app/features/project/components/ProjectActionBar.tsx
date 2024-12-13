"use client";

import { SelectDropDown } from "@/app/components/SelectDropDown";
import React from "react";

const PROJECT_STATUS_FILTER = [
  { id: "all", name: "All" },
  { id: "active", name: "Active" },
  { id: "completed", name: "Completed" },
];

const CLIENT_FILTER = [
  { id: "all", name: "All" },
  { id: "1", name: "Client 1" },
  { id: "2", name: "Client 2" },
];

const MANAGER_FILTER = [
  { id: "all", name: "All" },
  { id: "1", name: "Manager 1" },
  { id: "2", name: "Manager 2" },
];
// type TimeSheetActionBarProps = object

const ProjectActionBar = ({}) => {
  const [projectStatus, setProjectStatus] = React.useState(
    PROJECT_STATUS_FILTER[0]
  );
  const [client, setClient] = React.useState(CLIENT_FILTER[0]);
  const [manager, setManager] = React.useState(MANAGER_FILTER[0]);

  return (
    <div className="flex items-center justify-between gap-4 !mt-2 h-[80px]">
      <h1 className="font-medium text-[32px] leading-[32px]">Projects</h1>.{" "}
      <div className="flex items-center gap-4">
        <SelectDropDown
          title="Filter by status: "
          option={{ options: PROJECT_STATUS_FILTER }}
          selectedId={projectStatus}
          setSelectedId={setProjectStatus}
        />
        <SelectDropDown
          title="Filter by client: "
          option={{ options: CLIENT_FILTER }}
          selectedId={client}
          setSelectedId={setClient}
        />
        <SelectDropDown
          title="Filter by manager: "
          option={{ options: MANAGER_FILTER }}
          selectedId={manager}
          setSelectedId={setManager}
        />
      </div>
    </div>
  );
};

export default ProjectActionBar;

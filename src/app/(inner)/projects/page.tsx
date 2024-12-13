import { Button } from "@/app/elements/Button";
import ProjectTable from "@/app/features/project/components/ProjectTable";

import React from "react";

const ProjectPage = () => {
  return (
    <div className="h-[calc(100vh-126px)] mt-5">
      <div className="flex items-center gap-4 container pb-4">
        <Button size="md" as="link" href="/projects/new">
          + New project
        </Button>
        <Button size="md" variant="outline">
          Import
        </Button>
        <Button size="md" variant="outline">
          Export
        </Button>
      </div>
      <hr className="" />
      <ProjectTable />
    </div>
  );
};

export default ProjectPage;

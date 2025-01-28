"use client";
import React from "react";

import ProjectTableHeading from "./ProjectTableHeading";
import ProjectActionBar from "./ProjectActionBar";
import ProjectRow from "./ProjectRow";
import { useAllProjects } from "../api/useAllProjects";
import { FullPageLoader } from "@/app/components/FullPageLoader";

const ProjectTable = () => {
  const { data, isPending: projectIsPending } = useAllProjects({
    page: 1,
    limit: 50,
    search: "",
  });

  const projectData = data?.results;
  console.log(projectData);
  return (
    <div className="container">
      <ProjectActionBar />
      <ProjectTableHeading />
      {projectIsPending ? (
        <FullPageLoader height="h-[40vh]" />
      ) : (
        projectData?.map((project) => (
          <ProjectRow key={project.id} title={project.name} budget={1000} />
        ))
      )}
    </div>
  );
};

export default ProjectTable;

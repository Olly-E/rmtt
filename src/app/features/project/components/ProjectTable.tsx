import React from "react";

import ProjectTableHeading from "./ProjectTableHeading";
import ProjectActionBar from "./ProjectActionBar";
import ProjectRow from "./ProjectRow";


const ProjectTable = () => {
  return (
    <div className="container">
      <ProjectActionBar />
      <ProjectTableHeading />
      <ProjectRow />
      <ProjectRow />
      <ProjectRow />
      <ProjectRow />
    </div>
  );
};

export default ProjectTable;

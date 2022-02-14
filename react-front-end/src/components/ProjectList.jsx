import React from "react";
import ProjectListItem from "./ProjectListItem";


const ProjectList = (props) => {

  const {projects} = props;

  const mappedProjects = data.map((project) => {
    return (
      <div>
        <ProjectListItem project={project} />
      </div>
    );
  });
  return (
    {mappedProjects}
  )

}

export default ProjectList;
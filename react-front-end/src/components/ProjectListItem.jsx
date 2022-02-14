import React from "react";
import { BsHeart, BsHeartFill, BsEyeFill } from "react-icons/bs";

const ProjectListItem = (props) => {

  const {project} = props;

  return (
    <div className="project-block">
      <a href="/projects/{project.id}" ><img src={project.screenshot} alt={project.title} /></a>
      <span className="project-block-footer">
      <h5 className="project-title">{project.title}</h5>
      <BsHeart />
      <BsEyeFill />
      </span>
    </div>
  )
}

export default ProjectListItem;
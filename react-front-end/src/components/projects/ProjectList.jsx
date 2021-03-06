import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../scss/ProjectListItem.scss";
import ProjectListItem from "./ProjectListItem";

const AllProjects = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get("//express-server-hire.herokuapp.com/api/projects")
      .then((response) => {
        setState(response.data);
      });
  }, []);

  const mappedProjects = state.map((project) => {
    return (
      <ProjectListItem
        key={project.id}
        project_id={project.id}
        title={project.title}
        screenshot={project.screenshot}
        likes={project.likes}
        description={project.description}
        projectLink={project.project_url}
        owner_id={project.owner_id}
        stack={project.tech_stack}
      />
    );
  });

  return (
    <div className="main">
      <div className="project-container">{mappedProjects}</div>
    </div>
  );
};

export default AllProjects;

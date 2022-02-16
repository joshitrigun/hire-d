import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectListItem from "../components/ProjectListItem";
import { Link } from "react-router-dom";

const AllProjects = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("/api/projects").then((response) => {
      setState(response.data);
    });
  }, []);

  const mappedProjects = state.map((project) => {
    return (
      <div className="projects-block">
        <ProjectListItem
          key={project.id}
          id={project.id}
          title={project.title}
          screenshot={project.screenshot}
          likes={project.likes}
          //modal={ProjectPopup}
        />
      </div>
    );
  });
  return (
    <div>
      <Link to={"new"}>
        <p>CREATE NEW PROJECT</p>
      </Link>
      <div className="project-container">{mappedProjects}</div>
    </div>
  );
};

export default AllProjects;

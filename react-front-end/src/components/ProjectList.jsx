import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/ProjectListItem.css";
import ProjectListItem from "./ProjectListItem";

const AllProjects = () => {

  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get('/api/projects')
    .then((response) => {
      setState(response.data)
    })
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
        />
      </div>
    );
  });

  return (
    <div className="main">
        <div className="project-container">
          {mappedProjects}
        </div>
    </div>
  )
};

export default AllProjects;

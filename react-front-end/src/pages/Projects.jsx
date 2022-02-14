import React, { useState, useEffect } from "react";
import axios from "axios";
import TopNavBar from "../components/Top_nav_bar";
import "../components/ProjectListItem.css";
import ProjectListItem from "../components/ProjectListItem";

const Projects = () => {

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
    <body>
      <TopNavBar />
      <div className="project-container">
        {mappedProjects}
      </div>
    </body>
  )
};

export default Projects;

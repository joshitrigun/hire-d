<<<<<<< HEAD
import React from "react";
import { Route, Routes } from "react-router-dom";
import TopNavBar from "../components/Top_nav_bar";
import CreateProject from "../components/CreateProject";
import AllProjects from "../components/AllProjects";
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import TopNavBar from "../components/Top_nav_bar";
import "../components/ProjectListItem.css";
import ProjectListItem from "../components/ProjectListItem";
//import ProjectPopup from "../helpers/modal";
>>>>>>> b21a9752af64424166e103a4fb44dfd473cca0f7

const Projects = () => {
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
    <div className="main">
      <TopNavBar />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<AllProjects />} />
        <Route path="new" element={<CreateProject />} />
      </Routes>
=======
      <div className="project-container">{mappedProjects}</div>
>>>>>>> b21a9752af64424166e103a4fb44dfd473cca0f7
    </div>
  );
};

export default Projects;

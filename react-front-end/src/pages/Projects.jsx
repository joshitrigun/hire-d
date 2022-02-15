import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateProject from "../components/CreateProject";
import AllProjects from "../components/AllProjects";
import TopNavBar from "../components/Top_nav_bar";
import "../components/ProjectListItem.css";
//import ProjectPopup from "../helpers/modal";

const Projects = () => {
  return (
    <div className="main">
      <TopNavBar />
      <Routes>
        <Route path="/" element={<AllProjects />} />
        <Route path="new" element={<CreateProject />} />
      </Routes>
    </div>
  );
};

export default Projects;

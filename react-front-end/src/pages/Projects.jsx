import React from "react";
import { Route, Routes } from "react-router-dom";
import TopNavBar from "../components/Top_nav_bar";
import CreateProject from "../components/CreateProject";
import AllProjects from "../components/AllProjects";

const Projects = () => {
  return (
    <div>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<AllProjects />} />
        <Route path="new" element={<CreateProject />} />
      </Routes>
    </div>
  );
};

export default Projects;

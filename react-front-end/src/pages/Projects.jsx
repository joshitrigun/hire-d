import React from "react";
import TopNavBar from "../components/Top_nav_bar";
import "../components/ProjectListItem.css";

import { Routes, Route } from "react-router-dom";
import ProjectDetails from "../components/ProjectDetails";
import ProjectList from "../components/ProjectList";

const Projects = () => {
  return (
    <div className="main">
      <TopNavBar />

      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path=":id" element={<ProjectDetails />} />
        {/* <Route path="new" element={<CreateProject />} /> */}
      </Routes>
    </div>
  );
};

export default Projects;

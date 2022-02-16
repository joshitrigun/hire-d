import React from "react";
import TopNavBar from "../components/layout/Top_nav_bar";
import "../components/projects/ProjectListItem.css";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "../components/projects/ProjectDetails";
import ProjectList from "../components/projects/ProjectList";
import CreateProject from "../components/forms/CreateProject";

const Projects = () => {
  return (
    <div className="main">
      <TopNavBar />
      <h2 className="page-title">Projects</h2>
      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path=":id" element={<ProjectDetails />} />
        <Route path="new" element={<CreateProject />} />
      </Routes>
    </div>
  );
};

export default Projects;

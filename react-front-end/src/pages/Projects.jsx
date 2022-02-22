import React from "react";
import TopNavBar from "../components/layout/Top_nav_bar";
import "../scss/ProjectListItem.scss";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "../components/projects/ProjectDetails";
import ProjectList from "../components/projects/ProjectList";
import CreateProject from "../components/forms/CreateProject";
import EditProject from "../components/forms/EditProject";
import Footer from "../components/layout/Footer";

const Projects = () => {
  return (
    <div className="main">
      <TopNavBar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path=":id" element={<ProjectDetails />} />
          <Route path="new" element={<CreateProject />} />
          <Route path=":id/edit" element={<EditProject />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;

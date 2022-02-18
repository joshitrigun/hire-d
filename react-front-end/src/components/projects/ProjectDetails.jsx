import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { BsPlusLg } from "react-icons/bs";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const [singleProject, setSingleProject] = useState({});
  let url_id = useParams();

  const projectsDetails = (state, id) => {
    const getProject = state.filter((project) => project.id === id);
    console.log(getProject);
    setSingleProject(getProject[0]);
  };

  useEffect(() => {
    axios.get("/api/user_projects").then((response) => {
      projectsDetails(response.data, Number(url_id.id));
    });
  }, []);

  console.log(url_id);
  return (
    <div className="project-details-main">
      <span className="return-link">
        <Link to="/projects">All Projects</Link>
        <Link to="/projects/new">
          Create New Project <BsPlusLg className="bs-icon" />
        </Link>
      </span>
      <section className="project-details-block">
        <div className="project-image-large">
          <img src={singleProject.screenshot} alt={singleProject.title} />
        </div>
        <div className="project-details-info">
          <h2 className="project-page-title">{singleProject.title}</h2>
          <h5 className="project-info">
            Project by: {singleProject.first_name} {singleProject.last_name}
          </h5>
          <h5 className="project-info">
            Tech Stack: {singleProject.tech_stack}
          </h5>
          <p>
            Project URL:{" "}
            <a href={singleProject.project_url}>{singleProject.project_url}</a>
          </p>
          <p className="project-info"></p>
          <p className="project-description">{singleProject.description}</p>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;

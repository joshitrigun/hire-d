import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./ProjectDetails.css";
import { BsPlusLg } from "react-icons/bs";

const ProjectDetails = () => {
  const [singleProject, setSingleProject] = useState({});
  let url_id = useParams();

  const projectsDetails = (state, id) => {
    const singleProject = state.filter((project) => project.id === id);
    setSingleProject(singleProject[0]);
  };

  useEffect(() => {
    axios.get("/api/user_projects").then((response) => {
      projectsDetails(response.data, Number(url_id.id));
    });
  }, []);

  return (
    <div className="project-details-main">
      <span className="return-link">
        <Link to="/projects">All Projects</Link>
        <Link to="/projects/new">
          Create New Project <BsPlusLg className="bs-icon-white" />{" "}
        </Link>
      </span>
      <section className="project-details-block">
        <div className="project-image-large">
          <img src={singleProject.screenshot} alt={singleProject.title} />
        </div>
        <div className="project-details-info">
          <h2 className="project-page-title">{singleProject.title}</h2>
          <h4 className="project-info">
            Project by: {singleProject.first_name} {singleProject.last_name}
          </h4>
          <h4 className="project-info">
            Tech Stack: {singleProject.tech_stack}
          </h4>
          <p>
            Project URL:{" "}
            <a href={singleProject.project_url}>{singleProject.project_url}</a>
          </p>
          <p className="project-info"></p>
          <p className="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            ligula laoreet, mollis mauris id, rhoncus felis. Vivamus tempor eros
            quam, nec venenatis odio sollicitudin in. Donec faucibus orci
            ligula, eu convallis magna fermentum vestibulum. Proin ullamcorper
            dolor non sapien pharetra fermentum. Proin suscipit magna sit amet
            bibendum porttitor. Maecenas aliquam bibendum commodo. Pellentesque
            non orci sit amet nulla sagittis imperdiet id nec ante. Curabitur
            magna tortor, placerat nec mi eget, venenatis mattis nisi. Aenean
            purus odio, condimentum non consectetur vel, sagittis at lorem. In
            hac habitasse platea dictumst. Vivamus eget nisi eros. Vestibulum in
            mauris eu elit tempus tempor a nec quam.
            <br />
            <br />
            Suspendisse dui nisl, ullamcorper vel leo sit amet, pretium
            ullamcorper libero. Morbi egestas justo nec mi malesuada vestibulum.
            Aenean ut mollis nibh. Suspendisse malesuada neque vel vestibulum
            rutrum. Sed quis dui eget justo rutrum sollicitudin. Morbi vel
            dignissim felis, a ullamcorper sem. Proin interdum nisl diam,
            tincidunt mollis lacus malesuada sit amet. Phasellus sagittis at
            orci id pulvinar. Curabitur commodo auctor tellus eu congue. Aliquam
            sagittis, ante eget ultrices pharetra, nulla massa venenatis nisi,
            vitae tincidunt orci nibh ut felis. Ut commodo ex eu lorem ultrices,
            eu rutrum ex sollicitudin. Pellentesque justo tellus, rutrum non
            massa vitae, imperdiet faucibus enim.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;

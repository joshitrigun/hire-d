import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router";


const ProjectDetails = () => {

  const [singleProject, setSingleProject] = useState({});
  let url_id = useParams();
  console.log(url_id.id)

  const projectsDetails = (state, id) => {
    const singleProject = state.filter((project) => project.id === id)
      console.log(singleProject);
      setSingleProject(singleProject[0]);
    }

  useEffect(() => {
    axios.get('/api/user_projects')
    .then((response) => {
      projectsDetails(response.data, Number(url_id.id));
    })
  }, []);
  
  return (
    <div className="main">
      <div className="project-details">
        <h2 className="page-title">{singleProject.title}</h2>
        <h6 className="project-info">Project by: {singleProject.first_name} {singleProject.last_name}</h6>
        <h6 className="project-info">{singleProject.tech_stack}</h6>
        </div>
        <div className="project-image-large">
          <Link className="title-link" to="/projects">All Projects</Link>
      </div>
    </div>
  )
}

export default ProjectDetails;
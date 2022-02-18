import React from "react";
import { BsHeart } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import "./ProjectListItem.css";
// import axios from 'axios';

const ProjectListItem = (props) => {

  const { id, title, screenshot, likes } = props;

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/projects/${id}`; 
    navigate(path);
  }

  const countLikes = (event) => {
    console.log("Liked");
  };

  return (
    <div className="project-block" onClick={routeChange}>
      <div className="project-img-frame">
        <img className="project-thumbnail" src={screenshot} alt={title} />
      </div>
      <span className="project-block-footer">
        <NavLink className="title-link" to={`/projects/${id}`}>
          <h5 className="project-title">{title}</h5>
        </NavLink>
        <p>
          <BsHeart className="likes" onClick={countLikes} /> {likes}
        </p>
      </span>
    </div>
  );
};

export default ProjectListItem;

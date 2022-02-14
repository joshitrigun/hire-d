import React from "react";
import { BsHeart } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import "./ProjectListItem.css";

const ProjectListItem = (props) => {

  const {id, title, screenshot, likes, } = props;

  const countLikes = () => {
    console.log("liked");
  }

  return (
    <div className="project-block">
      <NavLink to={`/projects/${id}`}><img className="project-thumbnail" src={screenshot} alt={title} /></NavLink>
      <span className="project-block-footer">
      <h5 className="project-title">{title}</h5>
      <p><BsHeart className="likes" onClick={countLikes} /> {likes}</p>
      </span>
    </div>
  )
}

export default ProjectListItem;
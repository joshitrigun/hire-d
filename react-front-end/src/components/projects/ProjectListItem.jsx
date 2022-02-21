import React, { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { NavLink, useParams, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FaEdit } from "react-icons/fa";
import Button from "@mui/material/Button";
import "./ProjectListItem.css";
import Axios from "axios";

const ProjectListItem = (props) => {

  const { project_id, title, screenshot, likes, description, owner_id, projectLink, stack } = props;

  const [isProfile, setIsProfile] = useState(false);
  const location = useLocation();
  let { id } = useParams();
  const currentUser = Cookies.get("id");
  const [like, setLike] = useState(likes);
  // const [liked, updateLiked] = useState(false);


  useEffect(() => {
    if (currentUser === id && location.pathname === `/developers/${id}`) {
      setIsProfile(true);
    }
  }, []);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/projects/${project_id}`;
    navigate(path);
  };
  const countLikes = () => {

    const data = {
      title,
      description,
      owner_id,
      likes: like + 1,
      projectLink,
      screenshot,
      stack,
    };

    Axios.put(`http://localhost:8080/api/projects/${project_id}`, data)
    .then(response => {
      setLike(like => like += 1);
    }).catch(err => err.message)
  };

  return (
    <div className="project-block">
      <div className="project-img-frame" onClick={routeChange}>
        <img className="project-thumbnail" src={screenshot} alt={title} />
      </div>
      <span className="project-block-footer">
        <NavLink className="title-link" to={`/projects/${project_id}`}>
          <h5 className="project-title">{title}</h5>
        </NavLink>
        {isProfile ? (
          <Button variant="outlined" href={`/projects/${project_id}/edit`}>
            <span>
              <FaEdit /> EDIT
            </span>
          </Button>
        ) : (
          ""
        )}
        <p>
          <BsHeart className="likes" onClick={countLikes} /> {like}
        </p>
      </span>
    </div>
  );
};

export default ProjectListItem;

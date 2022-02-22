import React, { useEffect, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { NavLink, useParams, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FaEdit, FaTrash } from "react-icons/fa";
import Button from "@mui/material/Button";
import axios from "axios";
import "./ProjectListItem.css";
import Axios from "axios";

const ProjectListItem = (props) => {
  const {
    project_id,
    title,
    screenshot,
    likes,
    description,
    owner_id,
    projectLink,
    stack,
  } = props;

  const [isProfile, setIsProfile] = useState(false);
  const location = useLocation();
  let { id } = useParams();
  const currentUser = Cookies.get("id");
  const [like, setLike] = useState(likes);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (currentUser === id && location.pathname === `/developers/${id}`) {
      setIsProfile(true);
    }
  }, [id]);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/projects/${project_id}`;
    navigate(path);
  };
  const countLikes = () => {
    if (currentUser !== owner_id && liked === false) {
      const data = {
        title,
        description,
        owner_id,
        likes: like + 1,
        projectLink,
        screenshot,
        stack,
      };

      Axios.put(`/api/projects/${project_id}`, data)

        .then((response) => {
          setLike((like) => (like += 1));
          setLiked(true);
        })
        .catch((err) => err.message);
    }
  };

  const unlikeProject = () => {
    if (currentUser !== owner_id && liked === true) {
      const data = {
        title,
        description,
        owner_id,
        likes: like - 1,
        projectLink,
        screenshot,
        stack,
      };

      Axios.put(`/api/projects/${project_id}`, data)

        .then((response) => {
          setLike((like) => (like -= 1));
          setLiked(false);
        })
        .catch((err) => err.message);
    }
  };

  const onDeleteHandler = () => {
    return axios
      .delete(`//express-server-hire.herokuapp.com/api/projects/${project_id}`)
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.message);
      });
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
          <>
            <Button variant="outlined" href={`/projects/${project_id}/edit`}>
              <FaEdit />
            </Button>
            <Button variant="contained" color="error" onClick={onDeleteHandler}>
              <FaTrash />
            </Button>
          </>
        ) : (
          ""
        )}
        <p>
          {liked === false && (
            <BsHeart className="likes" onClick={countLikes} />
          )}
          {liked === true && (
            <BsHeartFill className="likes" onClick={unlikeProject} />
          )}
          &nbsp;{like}
        </p>
      </span>
    </div>
  );
};

export default ProjectListItem;

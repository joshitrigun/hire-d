import React from "react";
import { BsHeart } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./ProjectListItem.css";

const ProjectListItem = (props) => {

  const { id, title, screenshot, likes } = props;

  // const [like, setLike] = useState();
  // const data = like + 1;

  const countLikes = (event) => {

    console.log("Liked");
  };

  return (
    <div className="project-block">
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

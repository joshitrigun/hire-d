import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";
import {
  BsEnvelopeFill,
  BsGeoFill,
  BsGithub,
  BsTelephoneFill,
  BsLinkedin,
} from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import Button from "@mui/material/Button";

export default function Profile(props) {
  const { id } = useParams();
  const { user } = props;

  return (
    <div className="dev-profile-div">
      <img
        src={user.avatar}
        className="developer-profile-thumbnail"
        alt={user.first_name}
      />
      <span className="profile-header">
        <h3 className="title">
          {user.first_name} {user.last_name}
        </h3>
        <h5 className="sub-title">{user.designation}</h5>
        <p className="body-text">
          <BsGeoFill className="bs-icon" /> {user.city}, {user.province}
        </p>
      </span>
      <br />
      <p className="body-text">{user.about_me}</p>
      <h4 className="section-title">Skills</h4>
      <p className="body-text">{user.skills}</p>
      <p className="body-text ">
        <a href={user.resume} target="_blank">
          <h4 className="section-title text-primary">Resume</h4>
        </a>
      </p>
      <h4 className="section-title">Contact</h4>
      <p className="body-text">
        <BsGithub className="bs-icon" />
        <a href={user.github_url}> {user.github_url}</a>
      </p>
      <p className="body-text">
        <BsLinkedin className="bs-icon" />
        <a href={user.linkedin_url}> {user.linkedin_url}</a>
      </p>
      <p className="body-text">
        <BsEnvelopeFill className="bs-icon" /> {user.email}
      </p>
      <p className="body-text">
        <BsTelephoneFill className="bs-icon" /> {user.phone_number}
      </p>
      <br />
      {id === Cookies.get("id") ? (
        <Button variant="outlined" href={`/developers/${id}/profile/edit`}>
          <span>
            <FaEdit /> EDIT
          </span>
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}

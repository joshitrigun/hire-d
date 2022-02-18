import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";
import {
  BsEnvelopeFill,
  BsFullscreen,
  BsGeoFill,
  BsGithub,
  BsTelephoneFill,
  BsLinkedin,
} from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Profile(props) {
  const { user } = props;
  return (
    <div className="profile-div">
      <img src={user.avatar} className="profile-img" alt={user.first_name} />
      <h3 className="title">
        {user.first_name} {user.last_name}
      </h3>
      <h4 className="sub-title">{user.designation}</h4>
      <p className="body-text">
        <BsGeoFill className="bs-icon" /> {user.city}, {user.province}
      </p>
      <br />
      <p className="body-text">{user.about_me}</p>
      <h4 className="section-title">Skills</h4>
      <p className="body-text">{user.skills}</p>
      <h4 className="section-title">
        Resume <BsFullscreen className="bs-icon" />
      </h4>
      <p className="body-text">
        <a href={user.linkedin_url}>{user.linkedin_url}</a>
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
      <Link className="body-text btn btn-primary" to={"profile/edit"}>
        <FaEdit /> EDIT
      </Link>
    </div>
  );
}

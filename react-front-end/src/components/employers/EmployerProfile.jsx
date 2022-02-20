import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EmployerProfile.css";
import {
  BsEnvelopeFill,
  BsGeoFill,
  BsLinkedin,
  BsTelephoneFill,
} from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import Button from "@mui/material/Button";
import Cookies from "js-cookie";

export default function EmployerProfile(props) {
  const {
    id,
    avatar,
    first_name,
    designation,
    city,
    province,
    about_me,
    email,
    phone_number,
    linkedin_url,
  } = props;

  return (
    <div className="employer-profile-div">
      <img src={avatar} className="employer-profile-img" alt={first_name} />
      <span className="employer-profile-header">
        <h3 className="title">{first_name}</h3>
        <h5 className="sub-title">{designation}</h5>
        <p className="body-text">
          <BsGeoFill className="bs-icon" /> &nbsp; {city}, {province}
        </p>
      </span>
      <br />
      <p className="body-text">{about_me}</p>
      <p className="body-text">
        <BsEnvelopeFill className="bs-icon" />
        &nbsp; {email}
      </p>
      <p className="body-text">
        <BsTelephoneFill className="bs-icon" />
        &nbsp; {phone_number}
      </p>
      <p className="body-text">
        <BsLinkedin className="bs-icon" />
        &nbsp;<a href={linkedin_url}>{linkedin_url}</a>
      </p>
      <br />
      {id === Number(Cookies.get("id")) ? (
        <Button variant="outlined" href={`${id}/edit`}>
          <FaEdit />
          &nbsp; EDIT
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}

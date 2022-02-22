import React from "react";
import { BsEnvelopeFill, BsGeoFill, BsTelephoneFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "./DeveloperListItem.css";
import Button from "@mui/material/Button";

const DeveloperListItem = (props) => {
  const {
    id,
    first_name,
    last_name,
    designation,
    avatar,
    city,
    province,
    email,
    phone_number,
    resume,
  } = props;

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/developers/${id}`;
    navigate(path);
  };

  return (
    <div className="developer-block" onClick={routeChange}>
      <div className="img-frame">
        <img className="developer-thumbnail" src={avatar} alt={first_name} />
      </div>
      <Link className="title-link" to={`${id}`}>
        <h4>
          {first_name} {last_name}
        </h4>
      </Link>
      <h5>{designation}</h5>
      <p>
        <BsGeoFill className="bs-icon" /> {city}, {province}
      </p>
      <p>
        <BsEnvelopeFill className="bs-icon" /> {email}
      </p>
      <p>
        <BsTelephoneFill className="bs-icon" /> {phone_number}
      </p>
      <br />
      <Button variant="outlined" href={resume} className="mui-button">
        Resume
      </Button>
    </div>
  );
};

export default DeveloperListItem;

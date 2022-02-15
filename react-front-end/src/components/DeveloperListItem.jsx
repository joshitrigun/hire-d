import React from "react";
import { BsEnvelopeFill, BsGeoFill, BsTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./DeveloperListItem.css";

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
  } = props;

  return (
    <div className="developer-block">
      <div className="img-frame">
        <img className="developer-thumbnail" src={avatar} alt={first_name} />
      </div>
      <Link to={`${id}`}>
        {first_name} {last_name}
      </Link>
      <h6>{designation}</h6>
      <p>
        <BsGeoFill className="bs-icon" /> {city}, {province}
      </p>
      <p>
        <BsEnvelopeFill className="bs-icon" /> {email}
      </p>
      <p>
        <BsTelephoneFill className="bs-icon" /> {phone_number}
      </p>
      <h6>RESUME</h6>
    </div>
  );
};

export default DeveloperListItem;

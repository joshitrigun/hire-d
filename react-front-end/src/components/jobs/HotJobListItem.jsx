import React from "react";
import { BsGeoFill } from "react-icons/bs";
import { HiBriefcase } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import "../../scss/HotJobListItem.scss";

const HotJobListItem = (props) => {

  const { id, title, employer, city, province, salary } = props;

  return (
      <div className="hot-job-block">
        <span className="hot-icon-frame"><HiBriefcase className="hot-hi-icon" /></span>
        <span className="hot-job-info">
          <NavLink className="hot-title-link" to={`/jobs/${id}`}>
            <h5 className="hot-job-title">{title}</h5>
          </NavLink>
          <h6>{employer}</h6>
          <h6><BsGeoFill className="bs-icon"/> {city}, {province}</h6>
          <h5 className="hot-text-highlight">${salary}</h5>
        </span>
      </div>
  )
};

export default HotJobListItem;
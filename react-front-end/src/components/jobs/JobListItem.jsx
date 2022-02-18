import React from "react";
import { BsGeoFill } from "react-icons/bs";
import { HiBriefcase } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import "./JobListItem.css";

const JobListItem = (props) => {
  const { id, title, employer, city, province, salary, apply_link } = props;

  return (
    <div className="job-block">
      <span className="icon-frame">
        <HiBriefcase className="hi-icon" />
      </span>
      <span className="job-info">
        <NavLink className="title-link" to={`/jobs/${id}`}>
          <h4 className="job-title">{title}</h4>
        </NavLink>
        <h6>{employer}</h6>
        <h6>
          <BsGeoFill className="bs-icon" /> {city}, {province}
        </h6>
        <h5 className="text-highlight">${salary}</h5>
      </span>
      <br />
      <span className="apply-link">
        <a href={apply_link} target="_blank">
          Apply Here
        </a>
      </span>
    </div>
  );
};

export default JobListItem;

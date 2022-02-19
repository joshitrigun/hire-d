import React from "react";
import { BsGeoFill } from "react-icons/bs";
import { HiBriefcase } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import "./JobListItem.css";
import Button from "@mui/material/Button";

const JobListItem = (props) => {
  const { id, title, employer, city, province, salary, apply_link, jobType } =
    props;

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/jobs/${id}`;
    navigate(path);
  };

  return (
    <div className="job-block" onClick={routeChange}>
      <span className="icon-frame">
        <HiBriefcase className="hi-icon" />
      </span>
      <span className="job-info">
        <NavLink className="title-link" to={`/jobs/${id}`}>
          <h4 className="job-title">{title}</h4>
        </NavLink>
        <h6>{employer}</h6>
        <h6>{jobType}</h6>
        <h6>
          <BsGeoFill className="bs-icon" /> {city}, {province}
        </h6>
        <h5 className="text-highlight">${salary}</h5>
      </span>
      <br />
      <div>
        <Button variant="outlined" href={apply_link} target="_blank">
          Apply Here
        </Button>
        <span className="ms-2">
          <Button variant="outlined" href={`/jobs/${id}/edit`}>
            Edit
          </Button>
        </span>
      </div>
    </div>
  );
};

export default JobListItem;

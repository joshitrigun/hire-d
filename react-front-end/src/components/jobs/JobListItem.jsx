import React from "react";
import { BsGeoFill } from "react-icons/bs";
import { HiBriefcase } from "react-icons/hi";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./JobListItem.css";
import Button from "@mui/material/Button";
import Cookies from "js-cookie";

const JobListItem = (props) => {
  const {
    id,
    title,
    employer,
    city,
    province,
    salary,
    apply_link,
    jobType,
    employerId,
  } = props;

  let navigate = useNavigate();
  let location = useLocation();
  const routeChange = () => {
    let path = `/jobs/${id}`;
    navigate(path);
  };

  return (
    <div className="job-block">
      <span className="icon-frame">
        <HiBriefcase className="hi-icon" onClick={routeChange} />
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
        {location.pathname !== "/jobs" &&
        Number(Cookies.get("id")) === employerId ? (
          <span className="ms-2">
            <Button variant="outlined" href={`/jobs/${id}/edit`}>
              Edit
            </Button>
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default JobListItem;

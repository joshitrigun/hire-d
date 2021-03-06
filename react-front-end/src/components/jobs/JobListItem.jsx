import React from "react";
import { BsGeoFill } from "react-icons/bs";
import { HiBriefcase } from "react-icons/hi";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "../../scss/JobListItem.scss";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Cookies from "js-cookie";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";

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

  const onDeleteHandler = () => {
    return axios
      .delete(`//express-server-hire.herokuapp.com/api/jobs/${id}`)
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.message);
      });
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
        {location.pathname !== "/jobs" &&
        Number(Cookies.get("id")) === employerId ? (
          <span className="ms-2">
            <Button
              className="padding"
              variant="outlined"
              href={`/jobs/${id}/edit`}
            >
              <FaEdit />
            </Button>
            <Button
              className="ms-2 padding"
              variant="contained"
              color="error"
              onClick={onDeleteHandler}
            >
              <FaTrash />
            </Button>
          </span>
        ) : (
          <Stack spacing={2} direction='row'> 
            <Button variant="outlined" href={`/jobs/${id}`} target="_blank">
              View Details
            </Button>
            <Button variant="outlined" href={apply_link} target="_blank">
              Apply Here
            </Button>
          </Stack>
        )}
      </div>
    </div>
  );
};

export default JobListItem;

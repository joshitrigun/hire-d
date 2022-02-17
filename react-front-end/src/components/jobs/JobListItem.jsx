import React from "react";
import { BsGeoFill } from "react-icons/bs";
import { HiBriefcase } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./JobListItem.css";


const JobListItem = (props) => {

  const { id, title, employer, city, province, salary, apply_link, jobType } = props;

  return (
    <div className="job-block">
      <span className="icon-frame"><HiBriefcase className="hi-icon" /></span>
      <span className="job-info">
      <NavLink className="title-link" to={`/jobs/${id}`}><h4 className="job-title">{title}</h4></NavLink>
        <h5>{employer}</h5>
        <h6>{jobType}</h6>
        <h6><BsGeoFill className="bs-icon"/> {city}, {province}</h6>
        <h5 className="text-highlight">${salary}</h5>
      </span><br />
      <section className="job-block-footer">
        <Stack spacing={2} direction="row">
          <Button variant="outlined" href={`/jobs/${id}`}>View Details</Button>
          <Button variant="outlined" href={apply_link} target="_blank">Apply Here</Button>
        </Stack>
      </section>
    </div>
  )
};

export default JobListItem;
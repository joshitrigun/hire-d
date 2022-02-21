import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { HiBriefcase } from "react-icons/hi";
import { BsGeoFill } from "react-icons/bs";
import "./JobDetail.css";
import dateFormat from "dateformat";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const JobDetail = () => {
  const [job, setJob] = useState([]);

  const url_id = useParams();

  const jobDetails = (jobs, id) => {
    const singleJob = jobs.filter((job) => job.id === id);
    setJob(singleJob[0]);
  };

  useEffect(() => {
    axios.get("/api/jobs_employers").then((response) => {
      jobDetails(response.data, Number(url_id.id));
    });
  }, []);

  const {
    title,
    first_name,
    job_type,
    city,
    province,
    tech_stack,
    description,
    end_date,
    apply_link,
  } = job;

  return (
    <div className="job-details-main">
      <div className="job-detail-header">
        <Stack spacing={2} direction="row">
          <Button variant="outlined" href="/jobs">
            All Jobs
          </Button>
        </Stack>
      </div>
      <section className="job-details-block">
        <span className="job-icon">
          <HiBriefcase className="hi-icon" />
        </span>
        <span className="job-details-info">
          <h2 className="job-page-title">{title}</h2>
          <h4 className="Job-info">{first_name}</h4>
          <h5>{job_type}</h5>
          <h5 className="Job-info">
            <BsGeoFill className="bs-icon" /> {city}, {province}
          </h5>
          <br />
          <h4 className="project-info">Tech Stack: {tech_stack}</h4>
          <p className="project-info"></p>
          <p className="project-description">{description}</p>
          <br />
          <h5 className="Job-info">
            Apply by: {dateFormat(end_date, "mediumDate")}
          </h5>
        </span>
        <section className="job-details-footer">
          <Stack spacing={2} direction="row">
            <Button variant="outlined" href={apply_link} target="_blank">
              Apply Here
            </Button>
          </Stack>
        </section>
      </section>
    </div>
  );
};

export default JobDetail;

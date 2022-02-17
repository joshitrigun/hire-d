import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { HiBriefcase } from 'react-icons/hi';
import { BsGeoFill, BsPlusLg, BsSave } from "react-icons/bs";
import "./JobDetail.css";
import dateFormat, { masks } from "dateformat";

const JobDetail = () => {
  const [job, setJob] = useState([]);

  const url_id = useParams();

  const jobDetails = (jobs, id) => {
    const singleJob = jobs.filter((job) => job.id === id);
    setJob(singleJob[0]);
  };

  useEffect(() => {
    axios.get("/api/jobs_employers").then((response) => {
      console.log(response.data);
      jobDetails(response.data, Number(url_id.id));
    });
  }, []);

  return (
    <div className="job-details-main">
      <div className='job-detail-header'>
        <span className="return-link">
          <Link to="/jobs">All Jobs</Link>
        </span>
        <span className="return-link">
          <Link to="/jobs/new">Post New Job <BsPlusLg className="bs-icon" /></Link>
        </span>
      </div>
      <section className="job-details-block">
        <span className="job-icon">
          <HiBriefcase className="hi-icon" />
        </span>
        <span className="job-details-info">
          <h2 className="job-page-title">{job.title}</h2>
          <h4 className="Job-info">{job.first_name}</h4>
          <h5 className="Job-info"><BsGeoFill className='bs-icon' /> {job.city}, {job.province}</h5>
          <br/>
          <h4 className="project-info">Tech Stack: {job.tech_stack}</h4>
          <p className="project-info"></p>
          <p className="project-description">{job.description}</p>
          <br/>
          <h5 className="Job-info">Apply by: {dateFormat(job.end_date, "mediumDate")}</h5>
        </span>
        <section className='job-details-footer'>
          <span className="apply-link">
            <Link to="">Save <BsSave className='bs-icon' /></Link>
          </span>
          <span className="apply-link">
            <a href={job.apply_link} target="_blank">Apply Here</a>
          </span>
        </section>
      </section>
    </div>
  )
};

export default JobDetail;

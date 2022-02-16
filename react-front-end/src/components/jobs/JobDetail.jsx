import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import { HiBriefcase } from 'react-icons/hi';
import { BsPlusLg } from "react-icons/bs";
import "./JobDetail.css";

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

    const apply_link = job.apply_link;
  return ( 
    <div className="job-details-main">
      <span className="return-link">
        <Link to="/jobs">All Jobs</Link>
        <Link to="/jobs/new">
          Post New Job <BsPlusLg className="bs-icon" />
        </Link>
      </span>
      <section className="job-details-block">
      <div className="job-icon">
        <HiBriefcase className="hi-icon" />
      </div>
      <div className="job-details-info">
        <h2 className="job-page-title">{job.title}</h2>
        <h5 className="Job-info">Employer: {job.first_name}</h5>
        <h5 className="project-info">Tech Stack: {job.tech_stack}</h5>
        <p className="project-info"></p>
        <p className="project-description">{job.description}</p>
      </div>
      <span className="apply-link">
        <Link to={apply_link}>
          Apply Here
        </Link>
      </span>
      </section>
    </div>


  )
};
 
export default JobDetail;
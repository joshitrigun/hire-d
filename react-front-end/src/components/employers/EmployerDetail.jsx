import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import EmployerProfile from "./EmployerProfile";
import JobListItem from "../jobs/JobListItem";
import PerfectScrollbar from "react-perfect-scrollbar";
import Button from "@mui/material/Button";
import { GoPlus } from "react-icons/go";
import './EmployerProfile.css';
import './EmployerDetail.css';

const EmployerDetail = () => {

  const [state, setState] = useState({
    employer: {},
    jobs: []
  });

  const {id} = useParams();

  const getUsers = axios.get("/api/employers");
  const getJobs = axios.get("/api/jobs_employers");

  const getJobsByEmployers = (jobs, id) => {
    const jobsByEmployer = jobs.filter((job) => job.employer_id === id)
    return jobsByEmployer;
  }

  const getEmployer = (employers, id) => {
    const employer = employers.filter((singleEmployer) => singleEmployer.id === id)
    return employer[0];
  }

  useEffect(() => {
    Promise.all([getUsers, getJobs])
      .then((response) => {
        setState(prev => ({
          ...prev,
          employer: getEmployer(response[0].data, Number(id)),
          jobs: getJobsByEmployers(response[1].data, Number(id))
        }))
      }).catch(err => err)
  }, []);

  console.log(state.employer);
  console.log(state.jobs);

  const mappedJobs = state.jobs.map(job => {
    return (
      <Fragment key={job.id}>
        <JobListItem
        key={job.id}
        id={job.id}
        title={job.title}
        employer={job.first_name}
        jobType={job.job_type}
        city={job.city}
        province={job.province}
        salary={job.salary}
        apply_link={job.apply_link}
        />
      </Fragment>
    )
  })
  
  return (
    <div className="employer-detail">
      <div className="employer-profile-section">
        <EmployerProfile
          key={state.employer.id}
          id={state.employer.id}
          avatar={state.employer.avatar}
          first_name={state.employer.first_name}
          designation={state.employer.designation}
          city={state.employer.city}
          province={state.employer.province}
          about_me={state.employer.about_me}
          email={state.employer.email}
          phone_number={state.employer.phone_number}
          linkedin_url={state.employer.linkedin_url}
        />
      </div>
      <div className="employer-section-right">
        <div className="emp-job-section-header">
          <Button variant="outlined" href="jobs/new">
            Post New Job&nbsp;<GoPlus />
          </Button>
        </div>
        <div className="employer-job-section">
          <PerfectScrollbar onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>
            <div className="emp-job-section">{mappedJobs}</div>
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
};

export default EmployerDetail;

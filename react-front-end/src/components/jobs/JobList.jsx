import React, { useState, useEffect } from "react";
import axios from "axios";
import "./JobListItem.css";
import JobListItem from "./JobListItem";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("/api/jobs_employers").then((response) => {
      setJobs(response.data);
      console.log(response.data);
    });
  }, []);

  const mappedJobs = jobs.map((job) => {
    return (
      <JobListItem
        key={job.id}
        job={job}
      />
    );
  });
  return <div className="job-container">{mappedJobs}</div>;
};

export default JobList;

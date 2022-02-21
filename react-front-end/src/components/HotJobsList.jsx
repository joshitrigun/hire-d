import React, { useState, useEffect } from "react";
import axios from "axios";
import HotJobListItem from "./HotJobListItem";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("/api/jobs_users").then((response) => {
      setJobs(response.data);
    });
  }, []);

  console.log("Jobs", jobs);

  const mappedJobs = jobs.map((job) => {
    return (
      <HotJobListItem
      key={job.id}
      id={job.id}
      title={job.title}
      employer={job.first_name}
      city={job.city}
      province={job.province}
      salary={job.salary}
       />
    );
  });

  return (
    <div>
      {mappedJobs}
    </div>
  );
};

export default Jobs;

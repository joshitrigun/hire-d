import React, { useState, useEffect } from "react";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("/api/jobs").then((response) => {
      // console.log(response.data); // The entire response from the Rails API
      setJobs(response.data);
    });
  }, []);

  const mappedJobs = jobs.map((data) => {
    return (
      <div key={data.id} style={{ border: "10px solid yellow" }}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p>{data.tech_stack}</p>
        <p>{data.salary}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>Jobs</h2>
      {mappedJobs}
    </div>
  );
};

export default Jobs;

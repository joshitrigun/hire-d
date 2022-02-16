import React, { useState, useEffect } from "react";
import axios from "axios";
import TopNavBar from "../components/Top_nav_bar";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("/api/jobs").then((response) => {
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
      <TopNavBar />
      {mappedJobs}
    </div>
  );
};

export default Jobs;

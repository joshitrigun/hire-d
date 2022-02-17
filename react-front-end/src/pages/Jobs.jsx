import React from "react";
import TopNavBar from "../components/layout/Top_nav_bar";
import JobList from "../components/jobs/JobList";
import JobDetail from "../components/jobs/JobDetail";
import { Routes, Route } from "react-router-dom";
import CreateJob from "../components/forms/CreateJob";

const Jobs = () => {
  return (
    <div className="main">
      <TopNavBar />
      <h2 className="page-title">Jobs</h2>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path=":id" element={<JobDetail />} />
        <Route path="new" element={<CreateJob />} />
      </Routes>
    </div>
  );
};

export default Jobs;

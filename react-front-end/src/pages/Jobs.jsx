import React from "react";
import TopNavBar from "../components/layout/Top_nav_bar";
import JobList from "../components/jobs/JobList";
import JobDetail from "../components/jobs/JobDetail";
import { Routes, Route } from "react-router-dom";
import CreateJob from "../components/forms/CreateJob";
import EditJob from "../components/forms/EditJob";
import Footer from "../components/layout/Footer";

const Jobs = () => {
  return (
    <div className="main">
      <TopNavBar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path=":id" element={<JobDetail />} />
          <Route path="new" element={<CreateJob />} />
          <Route path=":id/edit" element={<EditJob />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;

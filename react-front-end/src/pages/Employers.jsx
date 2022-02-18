import React from "react";
import TopNavBar from "../components/layout/Top_nav_bar";
import { Route, Routes } from "react-router-dom";
import EmployerList from "../components/employers/EmployerList";
import EmployerDetail from "../components/employers/EmployerDetail";

const Employers = () => {
  return (
    <div className="main">
      <TopNavBar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<EmployerList />} />
          <Route path=":id" element={<EmployerDetail />} />
        </Routes>
      </div>
    </div>
  );
};

export default Employers;

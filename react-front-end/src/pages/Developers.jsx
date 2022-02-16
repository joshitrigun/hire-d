import React from "react";

import TopNavBar from "../components/layout/Top_nav_bar";
import { Route, Routes } from "react-router-dom";

import DeveloperList from "../components/developers/DeveloperList";
import DeveloperDetail from "../components/developers/DeveloperDetail";

const Developers = () => {
  return (
    <div className="main">
      <TopNavBar />
      <h2 className="page-title">Developers</h2>
      <Routes>
        <Route path="/" element={<DeveloperList />} />
        <Route path=":id" element={<DeveloperDetail />} />
      </Routes>
    </div>
  );
};

export default Developers;

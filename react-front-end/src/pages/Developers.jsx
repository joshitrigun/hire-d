import React from "react";
import TopNavBar from "../components/Top_nav_bar";
import { Route, Routes } from "react-router-dom";

import DeveloperList from "../components/DeveloperList";
import DeveloperDetail from "../components/DeveloperDetail";

const Developers = () => {
  return (
    <div className="main">
      <TopNavBar />
      <Routes>
        <Route path="/" element={<DeveloperList />} />
        <Route path=":id" element={<DeveloperDetail />} />
      </Routes>
    </div>
  );
};

export default Developers;

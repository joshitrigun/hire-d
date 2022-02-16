import React from "react";

import TopNavBar from "../components/Top_nav_bar";
import { Route, Routes } from "react-router-dom";

import DeveloperList from "../components/DeveloperList";
import DeveloperDetail from "../components/DeveloperDetail";
import CreateCertification from "../components/CreateCertification";

const Developers = () => {
  return (
    <div className="main">
      <TopNavBar />
      <Routes>
        <Route path="/" element={<DeveloperList />} />
        <Route path=":id" element={<DeveloperDetail />} />
        <Route
          path=":id/certifications/new"
          element={<CreateCertification />}
        />
      </Routes>
    </div>
  );
};

export default Developers;

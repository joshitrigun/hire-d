import React from "react";
import TopNavBar from "../components/layout/Top_nav_bar";
import { Route, Routes } from "react-router-dom";
import DeveloperList from "../components/developers/DeveloperList";
import DeveloperDetail from "../components/developers/DeveloperDetail";
import CreateCertification from "../components/certifications/CreateCertification";
import CreateSeekerForm from "../components/forms/CreateSeekerForm";

const Developers = () => {
  return (
    <div className="main">
      <TopNavBar />
      {/* <h2 className="page-title">Developers</h2> */}
      <Routes>
        <Route path="/" element={<DeveloperList />} />
        <Route path=":id" element={<DeveloperDetail />} />
        <Route
          path=":id/certifications/new"
          element={<CreateCertification />}
        />
        <Route path=":id/profile/edit" element={<CreateSeekerForm />} />
      </Routes>
    </div>
  );
};

export default Developers;

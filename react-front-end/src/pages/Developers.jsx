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
      <div className="main-container">
        <Routes>
          <Route path="/" element={<DeveloperList />} />
          <Route path=":id" element={<DeveloperDetail />} />
          <Route
            path=":id/certifications/new"
            element={<CreateCertification />}
          />
<<<<<<< HEAD
=======
          <Route path=":id/profile/edit" element={<CreateSeekerForm />} />
>>>>>>> c6b49e92bfcfe5a6118a46f69bff990f1a5a8f14
        </Routes>
      </div>
    </div>
  );
};

export default Developers;

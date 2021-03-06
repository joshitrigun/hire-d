import React from "react";
import TopNavBar from "../components/layout/Top_nav_bar";
import { Route, Routes } from "react-router-dom";
import DeveloperList from "../components/developers/DeveloperList";
import DeveloperDetail from "../components/developers/DeveloperDetail";
import CreateCertification from "../components/certifications/CreateCertification";
import EditCertification from "../components/certifications/EditCertification";
import EditSeekerForm from "../components/forms/EditSeekerForm";
import Footer from "../components/layout/Footer";

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
          <Route
            path=":id/certifications/:cert_id/edit"
            element={<EditCertification />}
          />
          <Route path=":id/profile/edit" element={<EditSeekerForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Developers;

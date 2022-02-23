import React from "react";
import TopNavBar from "../components/layout/Top_nav_bar";
import { Route, Routes } from "react-router-dom";
import EmployerList from "../components/employers/EmployerList";
import EmployerDetail from "../components/employers/EmployerDetail";
import CreateEmployerForm from "../components/forms/CreateEmployerForm";
import EditEmployerForm from "../components/forms/EditEmployerForm";
import Footer from "../components/layout/Footer";

const Employers = () => {
  return (
    <div className="main">
      <TopNavBar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<EmployerList />} />
          <Route path=":id" element={<EmployerDetail />} />
          <Route path="/new" element={<CreateEmployerForm />} />
          <Route path=":id/edit" element={<EditEmployerForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Employers;

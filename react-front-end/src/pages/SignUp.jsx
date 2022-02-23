import React from "react";
import TopNavBar from "../components/layout/Top_nav_bar";
import { Routes, Route } from "react-router-dom";
import Signup from "../components/forms/Signup";
import CreateEmployerForm from "../components/forms/CreateEmployerForm";
import CreateSeekerForm from "../components/forms/CreateSeekerForm";
import Footer from "../components/layout/Footer";

const SignUp = () => {
  return (
    <div className="main">
      <TopNavBar />
      <div className="signup-form-container">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/employer" element={<CreateEmployerForm />} />
          <Route path="/seeker" element={<CreateSeekerForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;

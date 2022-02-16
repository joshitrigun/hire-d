import React from "react";
import TopNavBar from "../components/Top_nav_bar";
import { Routes, Route } from "react-router-dom";
import Signup from "../components/Signup";
import CreateEmployerForm from "../components/CreateEmployerForm";
import CreateSeekerForm from "../components/CreateSeekerForm";

const SignUp = () => {
  return (
    <div>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="employer" element={<CreateEmployerForm />} />
        <Route path="seeker" element={<CreateSeekerForm />} />
      </Routes>
    </div>
  );
};

export default SignUp;

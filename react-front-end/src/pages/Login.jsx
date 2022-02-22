import React from "react";
import TopNavBar from "../components/layout/Top_nav_bar";
import LoginForm from "../components/forms/LoginForm";
import { Routes, Route } from "react-router-dom";
import '../scss/LoginForm.module.scss';
import Footer from "../components/layout/Footer";

const Login = () => {
  return (
    <div className="main">
      <TopNavBar />
      <div className="login-form-container">
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </div>
        <Footer />
    </div>
  );
};

export default Login;

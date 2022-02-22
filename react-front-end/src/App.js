import React from "react";
import { Route, Routes } from "react-router-dom";

// pages
import Homepage from "./pages/Homepage";
import Jobs from "./pages/Jobs";
import Projects from "./pages/Projects";
import Developers from "./pages/Developers";
import Employers from "./pages/Employers";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/scss/App.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="jobs/*" element={<Jobs />} />
      <Route path="projects/*" element={<Projects />} />
      <Route path="developers/*" element={<Developers />} />
      <Route path="employers/*" element={<Employers />} />
      <Route path="/login" element={<Login />} />
      <Route path="signup/*" element={<SignUp />} />
    </Routes>
  );
};

export default App;

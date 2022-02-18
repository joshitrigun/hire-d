import React from "react";
import { Route, Routes } from "react-router-dom";

// pages
import Homepage from "./pages/Homepage";
import Jobs from "./pages/Jobs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/projects/ProjectListItem.css";
import Projects from "./pages/Projects";
import Developers from "./pages/Developers";
import Login from "./pages/Login";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="jobs/*" element={<Jobs />} />
      <Route path="projects/*" element={<Projects />} />
      <Route path="developers/*" element={<Developers />} />
      <Route path="/login" element={<Login />} />
      <Route path="signup/*" element={<SignUp />} />
    </Routes>
  );
};

export default App;

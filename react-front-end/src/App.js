import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Jobs from "./pages/Jobs";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "./components/ProjectListItem.css";
import Projects from "./pages/Projects";
import Developers from "./pages/Developers";
import Login from "./pages/Login";
//import Single_project from "./pages/Single_project";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/jobs" element={<Jobs />} />
      <Route exact path="/projects" element={<Projects />} />

      <Route exact path="/developers" element={<Developers />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;

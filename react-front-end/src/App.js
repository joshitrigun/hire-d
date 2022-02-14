import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Jobs from "./pages/Jobs";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/jobs" element={<Jobs />} />
    </Routes>
  );
};

export default App;

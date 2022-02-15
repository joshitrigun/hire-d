import React, { useState, useEffect } from "react";
import axios from "axios";
import TopNavBar from "../components/Top_nav_bar";
import ProjectList from "../components/ProjectList";

const Homepage = () => {
  const [users, setUsers] = useState([]);
  return (
    <div className="main">
      <TopNavBar />
      <section className="left-side">
      <ProjectList />
      </section>
    </div>
  );
};

export default Homepage;

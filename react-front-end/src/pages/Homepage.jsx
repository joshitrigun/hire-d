import React from "react";
import TopNavBar from "../components/Top_nav_bar";
import ProjectList from "../components/ProjectList";

const Homepage = () => {
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

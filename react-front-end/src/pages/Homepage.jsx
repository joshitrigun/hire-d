import React from "react";
import TopNavBar from "../components/Top_nav_bar";
import ProjectList from "../components/ProjectList";
import HotJobList from "../components/HotJobsList";
import '../App.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

const Homepage = () => {
  return (
    <div className="main">
      <TopNavBar />
      <div className="main-container">
        <section className="home-left-side">
          <h2 className="page-title">Projects to explore...</h2>
          <PerfectScrollbar onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>
            <span className="home-projects">
              <ProjectList />
            </span>
          </PerfectScrollbar>
        </section>
        <section className="home-right-side">
          <h2 className="page-title">Hottest jobs...</h2>
          <PerfectScrollbar onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>
            <div className="hot-jobs-section">
              <HotJobList />
            </div>
          </PerfectScrollbar>
        </section>
      </div>
    </div>
  );
};

export default Homepage;

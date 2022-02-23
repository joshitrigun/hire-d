import React from "react";
import TopNavBar from "../components/layout/Top_nav_bar";
import HomeProjectList from "../components/projects/HomeProjectList";
import HotJobList from "../components/jobs/HotJobsList";
import "../scss/App.scss";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import Footer from "../components/layout/Footer";

const Homepage = () => {
  return (
    <div className="main">
      <TopNavBar />
      <div className="main-container">
        <section className="home-left-side">
          <h2 className="page-title">Projects to explore...</h2>
          <PerfectScrollbar>
            <span className="home-projects">
              <HomeProjectList />
            </span>
          </PerfectScrollbar>
        </section>
        <section className="home-right-side">
          <h2 className="page-title">Hottest jobs...</h2>
          <PerfectScrollbar>
            <div className="hot-jobs-section">
              <HotJobList />
            </div>
          </PerfectScrollbar>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;

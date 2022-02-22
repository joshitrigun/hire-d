import axios from "axios";
import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import ProjectListItem from "../projects/ProjectListItem";
import Certification from "../certifications/Certification";
import { useParams } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import "../../scss/DeveloperDetail.scss";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import Button from "@mui/material/Button";
import Cookies from "js-cookie";

const DeveloperDetail = () => {
  const [state, setState] = useState({
    user: {},
    projects: [],
    certifications: [],
  });

  let url_id = useParams();

  const getUsers = axios.get("//express-server-hire.herokuapp.com/api/users");
  const getProjects = axios.get(
    "//express-server-hire.herokuapp.com/api/projects"
  );
  const getCertifications = axios.get(
    "//express-server-hire.herokuapp.com/api/certifications"
  );

  const userDetails = (users, id) => {
    const singleUser = users.filter((user) => user.id === id);

    return singleUser[0];
  };

  const getProjectsByUser = (projects, id) => {
    const projectByUser = projects.filter((project) => project.owner_id === id);

    return projectByUser;
  };

  const getCertificationsByUser = (certifications, id) => {
    const certificates = certifications.filter(
      (certification) => certification.jobseeker_id === id
    );
    return certificates;
  };

  useEffect(() => {
    Promise.all([getUsers, getProjects, getCertifications]).then((response) => {
      setState((prev) => ({
        ...prev,
        user: userDetails(response[0].data, Number(url_id.id)),
        projects: getProjectsByUser(response[1].data, Number(url_id.id)),
        certifications: getCertificationsByUser(
          response[2].data,
          Number(url_id.id)
        ),
      }));
    });
  }, [url_id.id]);

  const mappedProjects = state.projects.map((project) => {
    return (
      <div className="projects-block" key={project.id}>
        <ProjectListItem
          project_id={project.id}
          title={project.title}
          screenshot={project.screenshot}
          likes={project.likes}
          description={project.description}
          projectLink={project.project_url}
          owner_id={project.owner_id}
          stack={project.tech_stack}
        />
      </div>
    );
  });

  const mappedCertification = state.certifications.map((certification) => {
    return (
      <Certification
        key={certification.id}
        cert_id={certification.id}
        title={certification.title}
        institution={certification.institution}
        city={certification.city}
        province={certification.province}
        startDate={certification.start_date}
        endDate={certification.end_date}
      />
    );
  });

  return (
    <div className="developer-detail">
      <div className="developer-detail-container">
        <div className="profile-section">
          <Profile user={state.user} />
        </div>
        <PerfectScrollbar>
          <div className="dev-section-right">
            <div className="dev-project-header">
              <h4 className="certification-title">My Projects</h4>
              {Cookies.get("id") === url_id.id ? (
                <span className="ms-2">
                  <Button variant="outlined" href="/projects/new">
                    Add New Project&nbsp;
                    <GoPlus />
                  </Button>
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="dev-project-section">{mappedProjects}</div>
            <span className="certification-container">
              <h4 className="certification-title">Certifications</h4>
              {Cookies.get("employer") === "false" &&
              Number(Cookies.get("id")) === state.user.id ? (
                <Button
                  variant="outlined"
                  href={`/developers/${url_id.id}/certifications/new`}
                >
                  Add New&nbsp;
                  <GoPlus />
                </Button>
              ) : (
                ""
              )}
            </span>
            <div className="certification-section">{mappedCertification}</div>
          </div>
        </PerfectScrollbar>
      </div>
    </div>
  );
};

export default DeveloperDetail;

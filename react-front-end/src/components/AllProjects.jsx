import React from "react";
import { Link } from "react-router-dom";

const AllProjects = () => {
  return (
    <div>
      <h3>THIS IS THE PROJECT PAGE</h3>
      <Link to={"new"}>
        <p>CREATE NEW PROJECT</p>
      </Link>
    </div>
  );
};

export default AllProjects;

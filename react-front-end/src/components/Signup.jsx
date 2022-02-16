import React from "react";
import { Link } from "react-router-dom";
import "./Signup.module.css";

const Signup = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center pt-5">
      <h2 className="pb-5 fs-2">Are you:</h2>
      <div>
        <Link to={"seeker"}>
          <button type="button" className="btn btn-primary fs-2 me-2">
            Job Seeker
          </button>
        </Link>
        <span className="fs-2">OR</span>
        <Link to={"employer"}>
          <button type="button" className="btn btn-primary fs-2 ms-2">
            Employer
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;

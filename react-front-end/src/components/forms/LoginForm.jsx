import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./LoginForm.module.css";
import Button from "@mui/material/Button";

const LoginForm = () => {
  let navigate = useNavigate();

  const onSeekerHandler = () => {
    Cookies.set("user", "trigunjoshi@gmail.com");
    Cookies.set("employer", "false");
    Cookies.set("id", "1");
    navigate("/");
  };

  const onEmployerHandler = () => {
    Cookies.set("user", "amazon@gmail.com");
    Cookies.set("employer", "true");
    Cookies.set("id", "13");
    navigate("/");
  };

  return (
    <form className="login-container">
      <div className="login-form">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input type="email" className="form-control" id="exampleInputEmail1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        Not a user?{" "}
        <span>
          <Link to={"/signup"}>Click here to register</Link>
        </span>
      </div>
      <Button
        variant="outlined"
        type="submit"
        className="btn btn-primary"
        onClick={onSeekerHandler}
      >
        Job Seeker
      </Button>
      <Button
        variant="outlined"
        type="submit"
        className="btn btn-primary"
        onClick={onEmployerHandler}
      >
        Employer
      </Button>
    </form>
  );
};

export default LoginForm;

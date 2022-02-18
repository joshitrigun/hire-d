import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LoginForm = () => {
  let navigate = useNavigate();

  const onClickHandler = () => {
    Cookies.set("user", "trigunjoshi@gmail.com");
    Cookies.set("id", "1");
    navigate("/");
  };

  return (
    <form className="job-container">
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
      <button
        type="submit"
        className="btn btn-primary"
        onClick={onClickHandler}
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;

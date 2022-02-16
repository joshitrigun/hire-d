import React from "react";
import { Link } from "react-router-dom";
import TopNavBar from "../components/layout/Top_nav_bar";

const Login = () => {
  return (
    <div>
      <TopNavBar />
      <form className="w-25 mt-5 mx-auto">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
          />
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

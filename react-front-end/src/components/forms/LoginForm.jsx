import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../../scss/LoginForm.module.scss";
import Button from "@mui/material/Button";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .get("//express-server-hire.herokuapp.com/api/all")
      .then((response) => {
        const data = response.data;

        const user = data.filter((user) => {
          if (user.email === userName) {
            return user;
          } else {
            setError(true);
            setTimeout(() => setError(false), 4000);
          }
          return null;
        });

        if (user.length > 0) {
          if (user[0].employer === false && user[0].password === password) {
            Cookies.set("user", userName);
            Cookies.set("employer", "false");
            Cookies.set("id", user[0].id);
            navigate(`/developers/${user[0].id}`);
          } else if (
            user[0].employer === true &&
            user[0].password === password
          ) {
            Cookies.set("user", userName);
            Cookies.set("employer", "true");
            Cookies.set("id", user[0].id);
            navigate(`/employers/${user[0].id}`);
          }
        }
      });
  };

  return (
      <form className="login-container">
        {error ? (
          <p className="bg-danger text-white text-center">
            Email does not exist, please sign up
          </p>
        ) : (
          ""
        )}
        <div className="form-input">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-input">
          Not a user?{" "}
          <span>
            <Link to={"/signup"}>Click here to register</Link>
          </span>
        </div>

        <div className="pt-4">
          <Button
            variant="outlined"
            type="button"
            className="btn btn-primary"
            onClick={onSubmit}
          >
            Submit
          </Button>
      </div>
    </form>
  );
};

export default LoginForm;

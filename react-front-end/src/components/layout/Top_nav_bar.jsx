import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Top_nav_bar.css";
// import { BsSearch } from "react-icons/bs";
import Cookies from "js-cookie";

const TopNavBar = () => {
  const [route, setRoute] = useState("");
  let navigate = useNavigate();

  const signoutHandler = () => {
    Cookies.remove("user");
    Cookies.remove("id");
    Cookies.remove("employer");
    navigate("/");
  };

  useEffect(() => {
    if (Cookies.get("user") === "trigunjoshi@gmail.com") {
      setRoute(`/developers/${Cookies.get("id")}`);
    } else {
      setRoute(`/employers/${Cookies.get("id")}`);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <img src="/logo.png" alt="Hire/:D" className="logo" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/projects"}>
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/jobs"}>
                Jobs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/developers"}>
                Developers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/employers"}>
                Employers
              </NavLink>
            </li>
            {Cookies.get("user") ? (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" to={route}>
                    {Cookies.get("user")}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <p className="nav-link signout-btn" onClick={signoutHandler}>
                    Signout
                  </p>
                </li>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" to={`/login`}>
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/signup"}>
                    SignUp
                  </NavLink>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;

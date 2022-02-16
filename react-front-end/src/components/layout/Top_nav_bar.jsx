import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Top_nav_bar.css";
import { BsSearch } from "react-icons/bs";
import Cookies from "js-cookie";

const TopNavBar = () => {
  let navigate = useNavigate();
  const signoutHandler = () => {
    Cookies.remove("user");
    navigate("/");
  };

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
            {Cookies.get("user") ? (
              <React.Fragment>
                <li className="nav-item fs-5 pt-2 px-3">
                  {Cookies.get("user")}
                </li>
                <li className="nav-item">
                  <a className="nav-link signout-btn" onClick={signoutHandler}>
                    Signout
                  </a>
                </li>
                {/* <li
                  className="nav-item nav-link fs-5 pt-2 px-3 pe-auto"
                  onClick={signoutHandler}
                >
                  {" "}
                  Signout
                </li> */}
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/login"}>
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
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <BsSearch className="bs-icon" />
              </button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;

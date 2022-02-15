import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Top_nav_bar.css";
import { BsSearch } from "react-icons/bs";

const TopNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <img src="/logo.png" alt="Hire/:D" className="logo" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
              <NavLink className="nav-link" to={"/login"}>
                Login/Register
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <BsSearch className="bs-icon"/>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Top_nav_bar.css";

const TopNavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to={"/"}>
          <img src="/logo.png" alt="Hire/:D" className="logo" />
        </Link>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink class="nav-link" to={"/projects"}>
                Projects
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to={"/jobs"}>
                Jobs
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to={"/developers"}>
                Developers
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to={"/login"}>
                <h3>Login/Register</h3>
              </NavLink>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;

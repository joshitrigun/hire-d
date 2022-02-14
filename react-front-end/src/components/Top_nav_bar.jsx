import React from "react";
import "./Top_nav_bar.css";


const TopNavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="/logo.png" alt="Hire/:D" className="logo" />
        </a>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/jobs">Jobs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/developers">Developers</a>
            </li>
          </ul>
          <form class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/users/new">Signup</a>
            </li>
          </ul>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
};

export default TopNavBar;
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to={"/"}>
        <h1>Hire/:D</h1>
      </Link>
      <NavLink to={"/jobs"}>
        <h3>Jobs</h3>
      </NavLink>
      <NavLink to={"/projects"}>
        <h3>Projects</h3>
      </NavLink>
      <NavLink to={"/developers"}>
        <h3>Developers</h3>
      </NavLink>
      <NavLink to={"/login"}>
        <h3>Login/Register</h3>
      </NavLink>
    </nav>
  );
};

export default Header;

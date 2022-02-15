import React, { useState, useEffect } from "react";
import axios from "axios";
import TopNavBar from "./Top_nav_bar";
import Profile from "./Profile";

const Developers = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get('/api/user_projects')
    .then((response) => {
      setState(response.data)
    })
  }, []);

  const projectsByUserId = (state, id) => {
  const projectsOfUser = state.filter((project) => project.owner_id === id)

    return projectsOfUser;
  }

  const parsedProjects = projectsByUserId(state, id).map((project) => {
    console.log(project.title);
  })

  return (
    <div>

      <Profile />
      {parsedProjects}
    </div>
  );
};

export default Developers;

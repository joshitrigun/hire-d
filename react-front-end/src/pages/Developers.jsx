import React, { useState, useEffect } from "react";
import axios from "axios";
import TopNavBar from "../components/Top_nav_bar";

const Developers = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get('/api/user_projects')
    .then((response) => {
      setState(response.data)
    })
  }, []);


  console.log(state);
  // const projectsByUserId = (state, id) => {
  // const projectsOfUser = state.filter((project) => project.owner_id === id)

  //   return projectsOfUser;
  // }

  return (
    <div>
      <TopNavBar />
      <h3>THIS IS THE DEVELOPER PAGE</h3>
    </div>
  );
};

export default Developers;

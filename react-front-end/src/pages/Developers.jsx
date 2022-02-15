import React, { useState, useEffect } from "react";
import axios from "axios";

import TopNavBar from "../components/Top_nav_bar";
import axios from "axios";
import DeveloperListItem from "../components/DeveloperListItem";

const Developers = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("/api/users").then((response) => {
      setState(response.data);
    });
  }, []);

  const mappedDevelopers = state.map((developer) => {
    return (
      <div className="developers-block">
        <DeveloperListItem
          key={developer.id}
          avatar={developer.avatar}
          first_name={developer.first_name}
          last_name={developer.last_name}
          designation={developer.designation}
          city={developer.city}
          email={developer.email}
          province={developer.province}
          phone_number={developer.phone_number}
        />
      </div>
    );
  });

  return (
    <div className="main">
      <TopNavBar />
      <div className="developer-container">{mappedDevelopers}</div>
    </div>
  );
};

export default Developers;

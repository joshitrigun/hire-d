import React, { useState, useEffect } from "react";

import axios from "axios";

import DeveloperListItem from "./DeveloperListItem";

const Developers = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("/api/users").then((response) => {
      setState(response.data);
    });
  }, []);

  const mappedDevelopers = state.map((developer) => {
    return (
      <DeveloperListItem
        id={developer.id}
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
    );
  });
  return (
    <div className="main">
      <div className="developer-container">{mappedDevelopers}</div>
    </div>
  );
};

export default Developers;

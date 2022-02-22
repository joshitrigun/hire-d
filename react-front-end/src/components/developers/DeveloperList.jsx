import React, { useState, useEffect } from "react";
import DeveloperListItem from "./DeveloperListItem";
import axios from "axios";

const Developers = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("//express-server-hire.herokuapp.com/api/users")
      .then((response) => {
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
        resume={developer.resume}
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

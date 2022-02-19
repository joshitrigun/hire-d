import React, { useState, useEffect } from "react";
import EmployerListItem from "./EmployerListItem";
import axios from "axios";

const EmployerList = () => {

  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("/api/employers").then((response) => {
      setState(response.data);
    }).catch(err => err)
  }, []);

  const mappedEmployers = state.map((employer) => {
    return (
      <EmployerListItem
      key={employer.id}
      id={employer.id}
      company={employer.first_name}
      avatar={employer.avatar}
      email={employer.email}
      city={employer.city}
      province={employer.province}
      />
    );
  });

  return (
    <div className="main">
      <div className="employer-container">{mappedEmployers}</div>
    </div>
  );
};

export default EmployerList;
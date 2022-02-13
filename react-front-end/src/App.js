import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        // console.log(response.data); // The entire response from the Rails API

        setData(response.data);
      });
    axios
      .get("/api/jobs") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        setJobs(response.data);
      });
  }, []);

  const mappedUsers = data.map((data) => {
    return (
      <div key={data.id} style={{ border: "10px solid red" }}>
        <p>{data.first_name}</p>
        <p>{data.last_name}</p>
        <img src={data.avatar} alt="avatar" />
        <p>{data.designation}</p>
        <p>{data.email}</p>
      </div>
    );
  });

  const mappedJobs = jobs.map((data) => {
    return (
      <div key={data.id} style={{ border: "10px solid yellow" }}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p>{data.tech_stack}</p>
        <p>{data.salary}</p>
      </div>
    );
  });

  return (
    <div className="App">
      <h1>Hello</h1>
      {mappedUsers}
      {mappedJobs}
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import TopNavBar from "../components/Top_nav_bar";

const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/users") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        // console.log(response.data); // The entire response from the Rails API

        setData(response.data);
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

  return (
    <div>
      <TopNavBar />
      {mappedUsers}
    </div>
  );
};

export default Homepage;

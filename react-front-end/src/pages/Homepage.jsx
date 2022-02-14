import React, { useState, useEffect } from "react";
import axios from "axios";
import TopNavBar from "../components/Top_nav_bar";

const Homepage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/users") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        setUsers(response.data);
      });
  }, []);

  const mappedUsers = users.map((user) => {
    return (
      <div key={user.id} style={{ border: "10px solid red" }}>
        <p>{user.first_name}</p>
        <p>{user.last_name}</p>
        <img src={user.avatar} alt="avatar" />
        <p>{user.designation}</p>
        <p>{user.email}</p>
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

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
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
<<<<<<< HEAD
      <div key={user.id} style={{ border: "10px solid red" }}>
        <p>{user.first_name}</p>
        <p>{user.last_name}</p>
        <img src={user.avatar} alt="avatar" />
        <p>{user.designation}</p>
        <p>{user.email}</p>
=======
      <div key={data.id} style={{ border: "5px solid red" }}>
        <p>{data.first_name}</p>
        <p>{data.last_name}</p>
        <img src={data.avatar} alt="avatar" />
        <p>{data.designation}</p>
        <p>{data.email}</p>
>>>>>>> 87f688ba5e3d8f1a7b9d395803efd1453f0f3cb9
      </div>
    );
  });

  return (
    <div>
<<<<<<< HEAD
      <Header />
      <h2>Homepage</h2>
=======
      <TopNavBar />
>>>>>>> 87f688ba5e3d8f1a7b9d395803efd1453f0f3cb9
      {mappedUsers}
    </div>
  );
};

export default Homepage;

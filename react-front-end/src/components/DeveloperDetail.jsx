import React from "react";

const DeveloperDetail = (props) => {
  const {
    id,
    first_name,
    last_name,
    designation,
    avatar,
    city,
    province,
    email,
    phone_number,
  } = props;
  return (
    <div>
      <h1> I am here</h1>
      <div>{first_name}</div>
      <div>{last_name}</div>
      <div>{designation}</div>
      <div>{avatar}</div>
      <div>{city}</div>
      <div>{province}</div>
      <div>{email}</div>
      <div>{phone_number}</div>
    </div>
  );
};

export default DeveloperDetail;

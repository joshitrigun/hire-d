import React from "react";
import { BsEnvelopeFill, BsGeoFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "./EmployerListItem.css";
import Button from "@mui/material/Button";

const EmployerListItem = (props) => {

  const { id, avatar, company, email, city, province } = props;

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/employers/${id}`; 
    navigate(path);
  }

  return (
    <div className="employer-block" onClick={routeChange}>
      <div className="img-frame">
        <img className="employer-thumbnail" src={avatar} alt={company} />
      </div>
      <Link className="title-link" to={`${id}`}>
        <h4>
          {company}
        </h4>
      </Link>
      <p>
        <BsGeoFill className="bs-icon" /> {city}, {province}
      </p>
      <p>
        <BsEnvelopeFill className="bs-icon" /> {email}
      </p>
      <br/>
      <Button variant="outlined" href={`/emoloyers/${id}`} className="mui-button">
        View Details
      </Button>
    </div>
  )
}

export default EmployerListItem;
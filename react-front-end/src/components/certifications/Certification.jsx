import React, { useState, useEffect } from "react";
import { FaUserGraduate, FaEdit, FaTrash } from "react-icons/fa";
import { useParams, useLocation } from "react-router-dom";
import dateFormat from "dateformat";
import "./Certification.css";
import Cookies from "js-cookie";
import Button from "@mui/material/Button";
import axios from "axios";

const Certification = (props) => {
  const [isProfile, setIsProfile] = useState(false);
  const location = useLocation();
  let { id } = useParams();
  const currentUser = Cookies.get("id");

  const { cert_id, title, institution, startDate, endDate, province, city } =
    props;

  useEffect(() => {
    if (currentUser === id && location.pathname === `/developers/${id}`) {
      setIsProfile(true);
    }
  }, [id]);

  const onDeleteHandler = () => {
    return axios
      .delete(
        `//express-server-hire.herokuapp.com/api/certifications/${cert_id}`
      )
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="certification-block">
      {isProfile ? (
        <div className="edit-button">
          <Button
            variant="outlined"
            href={`/developers/${Cookies.get(
              "id"
            )}/certifications/${cert_id}/edit`}
          >
            <FaEdit />
          </Button>
          <Button variant="contained" color="error" onClick={onDeleteHandler}>
            <FaTrash />
          </Button>
        </div>
      ) : (
        ""
      )}
      <div className="certification-main">
        <div className="job-icon">
          <FaUserGraduate className="hi-icon" />
        </div>
        <div className="info-section">
          <div className="certification-info">
            <h6>{title}</h6>
            <p>{institution}</p>
            <p>
              {city}, {province}
            </p>
            <p>
              {dateFormat(startDate, "mediumDate")} -{" "}
              {dateFormat(endDate, "mediumDate")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;

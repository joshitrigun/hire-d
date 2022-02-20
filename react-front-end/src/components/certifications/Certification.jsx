import React from "react";
import { FaUserGraduate, FaEdit } from "react-icons/fa";
import dateFormat from "dateformat";
import "./Certification.css";
import Cookies from "js-cookie";
import Button from "@mui/material/Button";

const Certification = (props) => {
  const { cert_id, title, institution, startDate, endDate, province, city } =
    props;
  return (
    <div className="certification-block">
      <div className="edit-button">
        <Button
          variant="outlined"
          href={`/developers/${Cookies.get(
            "id"
          )}/certifications/${cert_id}/edit`}
        >
          <FaEdit />
        </Button>
      </div>
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

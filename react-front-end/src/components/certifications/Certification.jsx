import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import dateFormat from "dateformat";
import "./certification.css";

const Certification = (props) => {
  const { title, institution, startDate, endDate, province, city } = props;
  return (
    <div className="certification-block">
      <div className="job-icon">
        <FaUserGraduate className="hi-icon" />
      </div>
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
  );
};

export default Certification;

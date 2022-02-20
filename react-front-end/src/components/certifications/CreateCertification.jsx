import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import "./EditCertification.css";
import Stack from "@mui/material/Stack";
const CreateCertification = () => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [institution, setInstitution] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const user_id = useParams();

  const reset = () => {
    setTitle("");
    setStartDate("");
    setEndDate("");
    setInstitution("");
    setCity("");
    setProvince("");

    setTimeout(() => setSubmitted(false), 5000);
  };

  const validate = () => {
    if (title === "") {
      setError("Title cannot be blank");
      return;
    }
    if (institution === "") {
      setError("Name of the institution can't be blank");
      return;
    }
    if (city === "") {
      setError("City cannot be blank");
      return;
    }
    if (province === "") {
      setError("Please enter province");
      return;
    }

    if (startDate === "") {
      setError("Start date cant be blank");
      return;
    }
    if (endDate === "") {
      setError("Finish date can't be blank");
      return;
    }
    setError("");
    onSubmitHandler();
  };
  const onSubmitHandler = () => {
    const data = {
      title,
      startDate,
      endDate,
      institution,
      city,
      province,
      jobSeekerId: user_id.id,
    };
    console.log(data);
    axios
      .post("http://localhost:8080/api/certifications", data)
      .then((response) => {
        setSubmitted(response.data);
        reset();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  console.log("id", user_id);
  return (
    <div>
      {submitted ? <p className="text-center">{submitted}</p> : ""}
      {error ? <p className="text-center">{error}</p> : ""}
      <form className="w-100 mx-auto" onSubmit={(e) => e.preventDefault()}>
        <div className="form-container">
          <h3 className="text-center">Add certification</h3>
          <div className="form-input">
            <input
              type="text"
              placeholder="Enter title"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              placeholder="Enter institution"
              name="institution"
              value={institution}
              onChange={(event) => setInstitution(event.target.value)}
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              placeholder="Enter Province"
              name="province"
              value={province}
              onChange={(event) => setProvince(event.target.value)}
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              placeholder="Enter city"
              name="city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <div className="form-input">
            <input
              type="date"
              name="startDate"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
            />
          </div>
          <div className="form-input">
            <input
              type="date"
              name="endDate"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
            />
          </div>
          <Stack spacing={2} direction="row">
            <Button onClick={validate}>Save</Button>
            <Link to={"/"}>
              <Button>Cancel</Button>
            </Link>
          </Stack>
        </div>
      </form>
    </div>
  );
};

export default CreateCertification;

import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "./EditCertification.css";
import Button from "@mui/material/Button";
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

  const navigate = useNavigate();
  const location = useLocation();
  const { id, cert_id } = useParams();

  useEffect(() => {
    if (location.pathname !== `/developers/${id}/certifications/new`) {
      axios
        .get(
          `//express-server-hire.herokuapp.com/api/certifications/${cert_id}`
        )
        .then((response) => {
          const data = response.data[0];
          console.log(location.pathname);
          console.log(data);
          if (Cookies.get("id")) {
            setTitle(data.title);
            setStartDate(data.start_date.slice(0, 10));
            setEndDate(data.end_date.slice(0, 10));
            setInstitution(data.institution);
            setCity(data.city);
            setProvince(data.province);
          }
        });
    }
  }, []);

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
      jobSeekerId: 1,
    };
    if (
      Cookies.get("id") &&
      location.pathname !== `/developers/${id}/certifications/new`
    ) {
      axios
        .put(
          `//express-server-hire.herokuapp.com/api/certifications/${cert_id}`,
          {
            ...data,
            cert_id,
          }
        )
        .then((response) => {
          setSubmitted(response.data);
          reset();
          setTimeout(() => navigate(`/developers/${id}`), 3000);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <div>
      {submitted ? (
        <p className="bg-success text-center text-white w-25 mx-auto fw-bold">
          {submitted}
        </p>
      ) : (
        ""
      )}
      {error ? (
        <p className="bg-danger text-center text-white w-25 mx-auto fw-bold">
          {error}
        </p>
      ) : (
        ""
      )}
      <form className="w-100 mx-auto" onSubmit={(e) => e.preventDefault()}>
        <div className="certification-form-container">
          <h3 className="text-center">Edit certification</h3>
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
              placeholder="Start Date: "
              name="startDate"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
            />
          </div>
          <div className="form-input">
            <input
              type="date"
              placeholder="End Date: "
              name="endDate"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
            />
          </div>
        </div>
        <div className="certification-button">
          <Stack spacing={2} direction="row">
            <Button variant="outlined" onClick={validate}>
              Save
            </Button>
            <Button variant="outlined" href="/">
              Cancel
            </Button>
          </Stack>
        </div>
      </form>
    </div>
  );
};

export default CreateCertification;

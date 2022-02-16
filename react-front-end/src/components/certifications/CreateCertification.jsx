import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const CreateCertification = () => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [institution, setInstitution] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

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
    console.log(data);
    Axios.post("http://localhost:8080/api/certifications", data)
      .then((response) => {
        setSubmitted(response.data);
        reset();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <h3 className="text-center">Create certifications</h3>
      {submitted ? <p className="text-center">{submitted}</p> : ""}
      {error ? <p className="text-center">{error}</p> : ""}
      <form className="w-50 mx-auto" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Enter institution"
          name="institution"
          value={institution}
          onChange={(event) => setInstitution(event.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Province"
          name="province"
          value={province}
          onChange={(event) => setProvince(event.target.value)}
        />

        <input
          type="text"
          placeholder="Enter city"
          name="city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <input
          type="date"
          name="startDate"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
        <input
          type="date"
          name="endDate"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
        <button onClick={validate}>Save</button>
        <Link to={"/"}>
          <button>Cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default CreateCertification;

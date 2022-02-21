import React, { useState, useEffect } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./CreateEmployerForm.module.css";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployerForm = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [about, setAbout] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [avatar, setAvatar] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/employers/${params.id}`)
      .then((response) => {
        const employer = response.data[0];
        setFirstName(employer.first_name);
        setEmail(employer.email);
        setNumber(employer.phone_number);
        setAbout(employer.about_me);
        setCity(employer.city);
        setProvince(employer.province);
        setAvatar(employer.avatar);
        setLinkedin(employer.linkedin_url);
      });
  }, []);

  const validate = () => {
    if (firstName === "") {
      setError("First name cannot be blank");
      return;
    }
    if (email === "") {
      setError("Email cannot be blank");
      return;
    }
    if (number === "") {
      setError("Number cannot be blank");
      return;
    }
    if (password === "") {
      setError("Password cannot be blank");
      return;
    }
    if (confirmPassword === "") {
      setError("Confirm password cannot be blank");
      return;
    }
    if (confirmPassword !== password) {
      setError("Confirm password and password inputs are different");
      return;
    }
    if (about === "") {
      setError("About cannot be blank");
      return;
    }
    if (city === "") {
      setError("City cannot be blank");
      return;
    }
    if (province === "") {
      setError("Province cannot be blank");
      return;
    }
    if (avatar === "") {
      setError("Avatar cannot be blank");
      return;
    }
    if (linkedin === "") {
      setError("Linkedin URL cannot be blank");
      return;
    }
    setError("");
    onSubmitHandler();
  };

  const reset = () => {
    setFirstName("");
    setEmail("");
    setNumber("");
    setPassword("");
    setConfirmPassword("");
    setAbout("");
    setCity("");
    setProvince("");
    setAvatar("");
    setLinkedin("");
    setTimeout(() => setSubmitted(false), 5000);
  };

  const onSubmitHandler = () => {
    const data = {
      first_name: firstName,
      last_name: "",
      email,
      number,
      password,
      designation: "",
      about,
      city,
      province,
      github_url: "",
      linkedin,
      resume: "",
      avatar,
      employer: true,
      skills: "",
    };

    axios
      .put(`http://localhost:8080/api/employers/${params.id}`, data)
      .then((response) => {
        setSubmitted(response.data);
        reset();
        setTimeout(() => {
          navigate(`/employers/${params.id}`);
        }, 3000);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
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
      <form className="w-200 mx-auto" onSubmit={(e) => e.preventDefault()}>
        <h3 className="text-center">Edit Profile</h3>
        <div className="form-container">
          <div className="form-header">
            <div className="form-input">
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div className="form-input">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-input">
              <input
                type="text"
                placeholder="Phone Number"
                name="number"
                value={number}
                onChange={(event) => setNumber(event.target.value)}
              />
            </div>
            <div className="form-input">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form-input">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirm_password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
            <div className="form-input">
              <textarea
                name="about"
                rows="5"
                cols="33"
                placeholder="About company..."
                value={about}
                onChange={(event) => setAbout(event.target.value)}
              />
            </div>
            <div className="form-input">
              <input
                type="text"
                placeholder="City"
                name="city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </div>
            <div className="form-input">
              <input
                type="text"
                placeholder="Province"
                name="province"
                value={province}
                onChange={(event) => setProvince(event.target.value)}
              />
            </div>
            {/* COME BACK TO THIS BELOW  */}
            <div className="form-input">
              <input
                type="text"
                placeholder="Choose Avatar"
                name="avatar"
                value={avatar}
                onChange={(event) => setAvatar(event.target.value)}
              />
            </div>
            <div className="form-input">
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={(event) => setLinkedin(event.target.value)}
              />
            </div>
            <div>
              <Stack spacing={2} direction="row">
                <Button variant="outlined" onClick={validate}>
                  Save
                </Button>
                <Button variant="outlined" href="/">
                  Cancel
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditEmployerForm;

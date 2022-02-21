import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import tech_stack from "../forms/TechStacks";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "../forms/CreateJob.css";
import { FaSave } from "react-icons/fa";
import Cookies from "js-cookie";
import onChangeHandler from "../../helpers/onChangeHandler";

const CreateJob = () => {
  const techArray = tech_stack.map((skill) => {
    return { ...skill, checked: false };
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [jobtype, setJobType] = useState("");
  const [checkedState, setCheckedState] = useState(techArray);
  const [salary, setSalary] = useState("");
  const [startDate, setStartDate] = useState("Pick Start Date");
  const [endDate, setEndDate] = useState("Pick End Date");
  const [featured, setFeatured] = useState(false);
  const [applyLink, setApplyLink] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const reset = () => {
    setTitle("");
    setDescription("");
    setJobType("");
    setCheckedState(
      tech_stack.map((skill) => {
        return { ...skill, checked: false };
      })
    );
    setSalary("");
    setStartDate("");
    setEndDate("");
    setFeatured(false);
    setApplyLink("");

    setError();
    setTimeout(() => setSubmitted(false), 3000);
  };

  const validate = () => {
    if (title === "") {
      setError("Title cannot be blank");
      return;
    }
    if (description === "") {
      setError("description cannot be blank");
      return;
    }
    if (jobtype === "") {
      setError("Job Type cannot be blank");
      return;
    }
    if (salary === "") {
      setError("Please enter Salary");
      return;
    }
    if (applyLink === "") {
      setError("Please enter job link");
    }
    setError("");
    onSubmitHandler();
  };

  const onCheckHandler = () => {
    if (featured === false) {
      setFeatured(true);
    } else {
      setFeatured(false);
    }
  };

  const onSubmitHandler = () => {
    const stack = [];
    checkedState.forEach((item, index) => {
      if (item.checked) {
        stack.push(item.name);
      }
    });
    const data = {
      title,
      description,
      jobtype,
      stack: stack.join(", "),
      salary,
      startDate,
      endDate,
      featured,
      employerId: Cookies.get("id"),
      applyLink,
    };
    axios
      .post("//express-server-hire.herokuapp.com/api/jobs", data)
      .then((response) => {
        setSubmitted(response.data);
        reset();
        setTimeout(() => navigate("/jobs"), 3000);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="job_form">
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
      <form className="row g-3" onSubmit={(e) => e.preventDefault()}>
        <h3 className="text-center">Post new Job</h3>
        <div className="form-container">
          <div className="form-header">
            <div className="form-input">
              <input
                type="text"
                placeholder="Enter job title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-input">
              <textarea
                type="text"
                placeholder="Enter description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-input">
              <input
                type="text"
                placeholder="Enter Job Type"
                name="jobtype"
                value={jobtype}
                onChange={(e) => setJobType(e.target.value)}
              />
            </div>

            <div className="form-input">
              <input
                type="text"
                placeholder="Enter Salary range"
                name="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <div className="form-input">
              <input
                placeholderText="Pick Start Date"
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
            <div className="form-input">
              <input
                type="text"
                placeholder="Post apply Link here"
                name="ApplyLink"
                value={applyLink}
                onChange={(e) => setApplyLink(e.target.value)}
              />
            </div>
          </div>
          <div className="form-footer">
            <div className="d-flex flex-column">
              <h4>Tech Stack</h4>
              <div className="tech-stack">
                {checkedState.map(({ name }, index) => {
                  return (
                    <div key={index}>
                      <input
                        type="checkbox"
                        name={name}
                        value={name}
                        id={name}
                        checked={checkedState[index].checked}
                        onChange={() =>
                          onChangeHandler(index, checkedState, setCheckedState)
                        }
                      />
                      <label htmlFor={name}>{name}</label>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="input-checkbox-feature">
              <input
                type="checkbox"
                name="featured"
                value={featured}
                checked={featured}
                onChange={onCheckHandler}
              />
              <label htmlFor="featured">&nbsp;Featured</label>
            </div>

            <Stack spacing={2} direction="row">
              <Button variant="outlined" onClick={validate}>
                Save&nbsp;
                <FaSave />
              </Button>

              <Button variant="outlined" href="/">
                Cancel&nbsp;
              </Button>
            </Stack>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateJob;

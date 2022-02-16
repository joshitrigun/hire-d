import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import tech_stack from "../forms/TechStacks";

const CreateJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [jobtype, setJobType] = useState("");
  const [checkedState, setCheckedState] = useState(
    new Array(tech_stack.length).fill(false)
  );

  const [salary, setSalary] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [featured, setFeatured] = useState(false);
  const [employerId, setEmployerId] = useState("");
  const [applyLink, setApplyLink] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const reset = () => {
    setTitle("");
    setDescription("");
    setJobType("");
    setCheckedState(new Array(tech_stack.length).fill(false));
    setSalary("");
    setStartDate("");
    setEndDate("");
    setFeatured(false);
    setEmployerId("");
    setApplyLink("");

    setError();
    setTimeout(() => setSubmitted(false), 5000);
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
    if (!checkedState.includes(true)) {
      setError("Make sure you to fill in tech stack!");
      return;
    }
    if (salary === "") {
      setError("Please enter Salary");
      return;
    }
    if (employerId === "") {
      setError("Please enter employerId");
      return;
    }
    if (applyLink === "") {
      setError("Please enter job link");
    }
    setError("");
    onSubmitHandler();
  };
  const onChangeHandler = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
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
      if (item) {
        stack.push(tech_stack[index].name);
      }
    });
    const data = {
      title,
      description,
      jobtype,
      stack: stack.toString(),
      salary,
      startDate,
      endDate,
      featured,
      employerId: 12,
      applyLink,
    };
    axios
      .post("http://localhost:8080/api/jobs", data)
      .then((response) => {
        setSubmitted(response.data);
        reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <h3 className="text-center">Post new Jobs</h3>
      {submitted ? <p>{submitted}</p> : ""}
      {error ? <p>{error}</p> : ""}
      <form className="w-90 mx-auto" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter job title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Job Type"
          name="jobtype"
          value={jobtype}
          onChange={(e) => setJobType(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Salary range"
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
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
        <input
          type="text"
          placeholder="EmployerId"
          name="employerId"
          value={employerId}
          onChange={(e) => setEmployerId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Post apply Link here"
          name="ApplyLink"
          value={applyLink}
          onChange={(e) => setApplyLink(e.target.value)}
        />
        <div className="d-flex flex-column">
          <h4>Tech Stack</h4>

          {tech_stack.map(({ name }, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  name={name}
                  value={name}
                  id={name}
                  checked={checkedState[index]}
                  onChange={() => onChangeHandler(index)}
                />
                <label htmlFor={name}>{name}</label>
              </div>
            );
          })}
        </div>

        <div>
          <input
            type="checkbox"
            name="featured"
            value={featured}
            checked={featured}
            onChange={onCheckHandler}
          />
          <label htmlFor="featured">Featured</label>
        </div>
        <button onClick={validate}>Save</button>
        <Link to={"/"}>
          <button>Cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default CreateJob;

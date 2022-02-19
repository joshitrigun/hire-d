import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import tech_stack from "./TechStacks";
import Cookies from "js-cookie";
import axios from "axios";
import Button from "@mui/material/Button";
import "../forms/CreateProject.css";
import Stack from "@mui/material/Stack";
import { FaSave } from "react-icons/fa";

const CreateProject = () => {
  const navigate = useNavigate();

  const techArray = tech_stack.map((skill) => {
    return { ...skill, checked: false };
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [screenshot, setScreenshot] = useState("");
  const [checkedState, setCheckedState] = useState(techArray);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const reset = () => {
    setTitle("");
    setDescription("");
    setProjectLink("");
    setScreenshot("");
    setCheckedState(
      tech_stack.map((skill) => {
        return { ...skill, checked: false };
      })
    );
    setTimeout(() => setSubmitted(false), 5000);
  };

  const validate = () => {
    if (title === "") {
      setError("title cannot be blank");
      return;
    }
    if (description === "") {
      setError("description cannot be blank");
      return;
    }
    if (projectLink === "") {
      setError("projectLink cannot be blank");
      return;
    }
    if (screenshot === "") {
      setError("screenshot cannot be blank");
      return;
    }

    setError("");
    onSubmitHandler();
  };

  const onChangeHandler = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position
        ? { ...item, checked: !item.checked }
        : { ...item, checked: item.checked }
    );
    setCheckedState(updatedCheckedState);
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
      owner_id: Cookies.get("id"),
      projectLink,
      screenshot,
      stack: stack.toString(),
    };

    axios
      .post("http://localhost:8080/api/projects", data)
      .then((response) => {
        setSubmitted(response.data);
        reset();
        navigate("/projects");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {submitted ? <p>{submitted}</p> : ""}
      {error ? <p>{error}</p> : ""}
      <form className="w-90 mx-auto" onSubmit={(e) => e.preventDefault()}>
        <h3 className="text-center">Create Project</h3>
        <div className="form-container">
          <div className="form-header">
            <div className="form-input">
              <input
                type="text"
                placeholder="Project Title"
                name="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="form-input">
              <textarea
                name="description"
                rows="5"
                cols="33"
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <div className="form-input">
              <input
                type="text"
                placeholder="Project Link"
                name="project_link"
                value={projectLink}
                onChange={(event) => setProjectLink(event.target.value)}
              />
            </div>
            {/* COME BACK TO THIS BELOW  */}
            <div className="form-input">
              <input
                type="text"
                placeholder="Add Screenshot"
                name="screenshot"
                value={screenshot}
                onChange={(event) => setScreenshot(event.target.value)}
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
                        onChange={() => onChangeHandler(index)}
                      />
                      <label htmlFor={name}>{name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            <Stack spacing={2} direction="row">
              <Button variant="outlined" onClick={validate}>
                Save&nbsp;
                <FaSave />
              </Button>
              <Link
                to={
                  Cookies.get("user") ? `/developers/${Cookies.get("id")}` : "/"
                }
              >
                <Button variant="outlined" href="/">
                  Cancel&nbsp;
                </Button>
              </Link>
            </Stack>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;

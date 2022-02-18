import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import tech_stack from "./TechStacks";
import Button from "@mui/material/Button";
import "../forms/CreateProject.css";
import Stack from "@mui/material/Stack";
import { FaSave } from "react-icons/fa";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [screenshot, setScreenshot] = useState("");
  const [checkedState, setCheckedState] = useState(
    new Array(tech_stack.length).fill(false)
  );
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const reset = () => {
    setTitle("");
    setDescription("");
    setProjectLink("");
    setScreenshot("");
    setCheckedState(new Array(tech_stack.length).fill(false));
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
    if (!checkedState.includes(true)) {
      setError("Make sure you to fill in tech stack!");
      return;
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
      owner_id: 1,
      likes: 0,
      projectLink,
      screenshot,
      stack: stack.toString(),
    };
    axios
      .post("http://localhost:8080/api/projects", data)
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
                {tech_stack.map(({ name }, index) => {
                  return (
                    <div className="tech-stack-names" key={index}>
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

export default CreateProject;

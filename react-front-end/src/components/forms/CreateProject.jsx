import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import tech_stack from "./TechStacks";
import Cookies from "js-cookie";
import axios from "axios";

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

  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/projects/${id}`).then((response) => {
      const data = response.data[0];
      console.log(id);
      console.log(data);
      if (Cookies.get("id")) {
        if (Number(id) === data.id) {
          setTitle(data.title);
          setDescription(data.description);
          setProjectLink(data.project_url);
          setScreenshot(data.screenshot);
          const skills = data.tech_stack.split(",");
          console.log(skills);
          const newCheckedState = checkedState.map((skill) => {
            if (skills.includes(skill.name)) {
              skill.checked = true;
            }
            return skill;
          });
          console.log(newCheckedState);
          setCheckedState(newCheckedState);
        }
      }
    });
  }, []);

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
      id,
      title,
      description,
      owner_id: Cookies.get("id"),
      likes: 0,
      projectLink,
      screenshot,
      stack: stack.toString(),
    };
    if (Cookies.get("id")) {
      axios
        .put(`http://localhost:8080/api/projects/${id}`, data)
        .then((response) => {
          setSubmitted(response.data);
          reset();
          setTimeout(() => navigate(`/projects/${id}`), 5000);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      axios
        .post("http://localhost:8080/api/projects", data)
        .then((response) => {
          setSubmitted(response.data);
          reset();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <div>
      <h3 className="text-center">
        {Cookies.get("user") ? "Edit" : "Create"} Project
      </h3>
      {submitted ? <p>{submitted}</p> : ""}
      {error ? <p>{error}</p> : ""}
      <form className="w-90 mx-auto" onSubmit={(e) => e.preventDefault()}>
        <div className="d-flex flex-column">
          <input
            type="text"
            placeholder="Project Title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea
            name="description"
            rows="5"
            cols="33"
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <input
            type="text"
            placeholder="Project Link"
            name="project_link"
            value={projectLink}
            onChange={(event) => setProjectLink(event.target.value)}
          />
          {/* COME BACK TO THIS BELOW  */}
          <input
            type="text"
            placeholder="Add Screenshot"
            name="screenshot"
            value={screenshot}
            onChange={(event) => setScreenshot(event.target.value)}
          />
        </div>
        <div className="d-flex flex-column">
          <h4>Tech Stack</h4>

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
        <button onClick={validate}>Save</button>
        <Link
          to={Cookies.get("user") ? `/developers/${Cookies.get("id")}` : "/"}
        >
          <button>Cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default CreateProject;

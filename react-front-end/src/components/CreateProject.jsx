import React, { useState } from "react";
import { tech_stack } from "./TechStacks";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [completedDate, setCompletedDate] = useState();
  const [checkedState, setCheckedState] = useState(
    new Array(tech_stack.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <div>
      <h3 className="text-center">Create Project</h3>
      <form className="w-50 mx-auto" onSubmit={(e) => e.preventDefault()}>
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
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          >
            Description
          </textarea>
          <input
            type="text"
            placeholder="Project Link"
            name="project_link"
            value={projectLink}
            onChange={(event) => setProjectLink(event.target.value)}
          />
          <input
            type="date"
            placeholder="Completion Date"
            name="completion_date"
            value={completedDate}
            onChange={(event) => setCompletedDate(event.target.value)}
          />
          {/* COME BACK TO THIS BELOW  */}
          <input type="file" placeholder="Add Screenshot" name="screenshot" />
        </div>
        <div className="d-flex flex-column">
          <h4>Tech Stack</h4>

          {tech_stack.map(({ name }, index) => {
            return (
              <div>
                <input
                  type="checkbox"
                  name={name}
                  value={name}
                  id={name}
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                />
                <label for={name}>{name}</label>
              </div>
            );
          })}
        </div>
        <button>Save</button>
        <button>Cancel</button>
      </form>
    </div>
  );
};

export default CreateProject;

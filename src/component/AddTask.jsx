/* eslint-disable react/prop-types */
import { useContext, useRef, useState } from "react";
import { TaskProvider } from "../contextAPI/ContextProvider";

function AddTask({ Check, Data, type }) {
  const { AddTask } = useContext(TaskProvider);
  const { UpdateTask } = useContext(TaskProvider);
  const [formData, setFormData] = useState({
    title: Data.title || "",
    description: Data.description || "",
  });
  const [error, setError] = useState({
    title: false,
    description: false,
  });

  const handleValue = (data) => {
    setFormData({ ...formData, [data.target.name]: data.target.value });
    data.target.value.trim().length > 0 &&
      setError({ ...error, [data.target.name]: false });
  };

  const addTask = (data) => {
    const ob = {};
    for (const value in formData) {
      if (formData[value].trim() < 1) {
        ob[value] = true;
      }
    }
    setError(ob);
    if (
      formData.title.trim().length > 1 &&
      formData.description.trim().length > 1
    ) {
      Check();
      AddTask(data);
    }
  };
  const updateTask = (data) => {
    const ob = {};
    for (const value in formData) {
      if (formData[value].trim() < 1) {
        ob[value] = true;
      }
    }
    setError(ob);
    if (
      formData.title.trim().length > 1 &&
      formData.description.trim().length > 1
    ) {
      Check();
      UpdateTask(data);
    }
  };

  return (
    <div className="overlay">
      <div className="addTask">
        {type == "create" ? <h1>ADD NEW TASK</h1> : <h1>UPDATE THE TASK</h1>}
        <div className="form">
          <div className="input">
            <label htmlFor="title">Title Name</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={(e) => handleValue(e)}
              defaultValue={Data.title || ""}
            />
            {error.title && <span className="error">* Error: Con't be Empty </span>}
            </div>
          <div className="input">
            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              type="text"
              onChange={(e) => handleValue(e)}
              defaultValue={Data.description || ""}
            />
            {error.description && <span className="error">* Error: Con't be Empty </span>}
          </div>
          <div className="option">
            <button className="cancel" onClick={Check}>
              Cancel
            </button>
            <button
              className="create"
              onClick={() =>
                type == "create"
                  ? addTask({
                      id: Date.now(),
                      date: new Date().toLocaleDateString(),
                      active: false,
                      ...formData,
                    })
                  : updateTask({
                      id: Data.id,
                      date: Data.date,
                      active: Data.active,
                      ...formData,
                    })
              }
            >
              {type == "create" ? "CREATE" : "UPDATE"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTask;

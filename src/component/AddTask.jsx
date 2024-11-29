/* eslint-disable react/prop-types */
import { useContext, useRef, useState } from "react";
import { TaskProvider } from "../contextAPI/ContextProvider";
import { motion } from "framer-motion";

const colors = [
  {
    main: "#FFC107",
    second: "#ffc10747",
  },
  {
    main: "#009688",
    second: "#0096882b",
  },
  {
    main: "#F44336",
    second: "#f4433617",
  },
  {
    main: "#9C27B0",
    second: "#9c27b01a",
  },
  {
    main: "#2196F3",
    second: "#2196f31c",
  },
];
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

  const random = Math.floor(Math.random() * colors.length);

  return (
    <div className="overlay">
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.6 }}
        transition={{ type: "spring", damping: 15, stiffness: 400 }}
        className="addTask"
      >
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
            {error.title && (
              <span className="error">* Error: Con't be Empty </span>
            )}
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
            {error.description && (
              <span className="error">* Error: Con't be Empty </span>
            )}
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
                      favorite: false,
                      completed: false,
                      colors: colors[random],
                      ...formData,
                    })
                  : updateTask({
                      id: Data.id,
                      date: Data.date,
                      favorite: Data.favorite,
                      completed: Data.completed,
                      colors: Data.colors,
                      ...formData,
                    })
              }
            >
              {type == "create" ? "CREATE" : "UPDATE"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AddTask;

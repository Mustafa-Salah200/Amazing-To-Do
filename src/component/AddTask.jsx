/* eslint-disable react/prop-types */
import { useContext, useRef } from "react";
import { TaskProvider } from "../contextAPI/ContextProvider";

function AddTask({ Check, Data, type }) {
  const { AddTask } = useContext(TaskProvider);
  const { UpdateTask } = useContext(TaskProvider);
  const addTask = (data) => {
    Check();
    AddTask(data);
  };
  const updateTask = (data) => {
    Check();
    UpdateTask(data);
  };

  const title = useRef(Data.title || "");
  const description = useRef(Data.description || "");

  return (
    <div className="overlay">
      <div className="addTask">
        {type == "create" ? <h1>ADD NEW TASK</h1> : <h1>UPDATE THE TASK</h1>}
        <div className="form">
          <div className="input">
            <label htmlFor="title">Title Name</label>
            <input
              ref={title}
              id="title"
              type="text"
              defaultValue={Data.title || ""}
            />
          </div>
          <div className="input">
            <label htmlFor="title">Description</label>
            <input
              ref={description}
              id="title"
              type="text"
              defaultValue={Data.description || ""}
            />
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
                      title: title.current.value,
                      description: description.current.value,
                    })
                  : updateTask({
                      id: Data.id,
                      date: Data.date,
                      active: Data.active,
                      title: title.current.value,
                      description: description.current.value,
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

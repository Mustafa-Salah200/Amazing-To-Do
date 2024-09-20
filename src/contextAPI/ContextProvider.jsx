/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const TaskProvider = createContext();
const GetData = JSON.parse(window.localStorage.getItem("datalist2"));

function ContextProvider(props) {
  const [tasks, setTasks] = useState(GetData || []);
  const AddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  const UpdateTask = (newTask) => {
    const newTasks = tasks.map((ele) => {
      return ele.id === newTask.id ? { id: newTask.id, ...newTask } : ele;
    });
    setTasks(newTasks);
  };
  const ClearTask = () => {
    setTasks([]);
  };
  const RemoveTask = (task) => {
    const newTasks = tasks.filter((ele) => {
      return ele.id !== task.id;
    });
    setTasks(newTasks);
  };
  // const UpdateTask = (newTask) => {
  //   const newTasks = tasks.map((ele) => {
  //     return ele.id === newTask.id ? { id: newTask.id, ...newTask } : ele;
  //   });
  //   window.localStorage.setItem("datalist2", JSON.stringify(newTasks));
  // };

  useEffect(() => {
    window.localStorage.setItem("datalist2", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <TaskProvider.Provider
      value={{
        tasks,
        AddTask,
        UpdateTask,
        ClearTask,
        RemoveTask,
      }}
    >
      {props.children}
    </TaskProvider.Provider>
  );
}

export default ContextProvider;

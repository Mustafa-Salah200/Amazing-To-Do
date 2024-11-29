/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const TaskProvider = createContext();
const GetData = JSON.parse(window.localStorage.getItem("datalist2"));

function ContextProvider(props) {
  const [tasks, setTasks] = useState(GetData || []);
  const newTasks = tasks.filter(task => task.favorite)
  const [activeData, setActiveData] = useState(newTasks);


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
  const Active = (type)=>{
    if(type === "favorite"){
      const newTasks = tasks.filter(task => task.favorite)
      setActiveData(newTasks)
    } else {
      setActiveData(tasks)
    }
  }

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
        Active,
        activeData
      }}
    >
      {props.children}
    </TaskProvider.Provider>
  );
}

export default ContextProvider;

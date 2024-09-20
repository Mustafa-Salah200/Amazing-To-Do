/* eslint-disable react/prop-types */
import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskProvider } from "../contextAPI/ContextProvider";

function Favorite() {
  const { tasks } = useContext(TaskProvider);
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

  return (
    <div className="mainpage">
      <h2 className="title">

        <p></p>Favorite
      </h2>
      <div className="content">
        {tasks &&
          tasks.map((ele, index) => {
            if (ele.active) {
              const random = Math.floor(Math.random() * colors.length);
              return (
                <TaskCard key={index} colors={colors[random]} Data={ele} />
              );
            }
          })}
      </div>
    </div>
  );
}

export default Favorite;

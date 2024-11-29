/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import TaskCard from "./TaskCard";
import { TaskProvider } from "../contextAPI/ContextProvider";
import { motion } from "framer-motion";

function Favorite() {
  const { tasks } = useContext(TaskProvider);
  const [target, setTarget] = useState("");

  return (
    <div className="mainpage">
      <div className="search">
        <motion.input
          whileFocus={{ scaleX: 1.1 }}
          transition={{ type: "spring", damping: 10, stiffness: 300 }}
          type="text"
          onChange={(e) => setTarget(e.target.value)}
          value={target}
          placeholder="Search for ..."
        />
      </div>
      <div className="title">
        <h1>Favorite</h1>
      </div>
      <div className="content">
        {tasks &&
          tasks.map((ele, index) => {
            if (ele.favorite) {
              if (target.trim().length > 0) {
                if (
                  ele.title.toLowerCase().includes(target.toLowerCase()) ||
                  ele.description.toLowerCase().includes(target.toLowerCase())
                ) {
                  return <TaskCard key={index} Data={ele} />;
                }
              } else {
                return <TaskCard key={index} Data={ele} />;
              }
            }
          })}
      </div>
    </div>
  );
}

export default Favorite;

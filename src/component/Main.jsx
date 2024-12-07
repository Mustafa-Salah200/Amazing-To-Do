/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import TaskCard from "./TaskCard";
import { TaskProvider } from "../contextAPI/ContextProvider";
import { AnimatePresence, motion } from "framer-motion";

function Main({ data }) {
  const { tasks, ClearTask } = useContext(TaskProvider);
  const [target, setTarget] = useState("");
  const [sort, setSort] = useState(tasks);

  const handledelete = (id)=>{
    const newArray = sort.filter(ele => ele.id !== id);
    setSort(newArray);
  }
  return (
    <div className="mainpage">
      <div className="search">
        <motion.input
          whileFocus={{scaleX: 1.1}}
          transition={{type: "spring" , damping: 10 , stiffness : 300}}
          type="text"
          onChange={(e) => setTarget(e.target.value)}
          value={target}
          placeholder="Search for ..."
        />
      </div>
      <div className="title">
        <h1>All Tasks</h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => ClearTask()}
        >
          CLEAR ALL
        </motion.button>
      </div>
        <div className="content">

          
          {tasks &&
            tasks.map((ele, index) => {
              if (target.trim().length > 0) {
                if (
                  ele.title.toLowerCase().includes(target.toLowerCase()) ||
                  ele.description.toLowerCase().includes(target.toLowerCase())
                ) {
                  return <TaskCard key={index} Data={ele} />;
                }
              } else {
                return (
                    <TaskCard  Data={ele} key={index} />
                )
              }
            })}
        </div>
    </div>
  );
}

export default Main;

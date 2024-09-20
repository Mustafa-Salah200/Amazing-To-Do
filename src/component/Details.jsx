/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TaskProvider } from "../contextAPI/ContextProvider";

function Details() {
  const { tasks } = useContext(TaskProvider);
  return (
    <>
      {tasks &&
        tasks.map((ele) => {
          if (`#/details/${ele.id}` == window.location.hash) {
            return (
              <div className="details" key={ele.id}>
                <h1>{ele.title}</h1>
                <p>{ele.description}</p>
              </div>
            );
          }
        })}
    </>
  );
}

export default Details;

import { nav } from "framer-motion/client";
import { useState } from "react";

function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    if (!dark) {
      document.documentElement.style.setProperty("--main-color", "#222");
      document.documentElement.style.setProperty("--secondary-color", "#333");
      document.documentElement.style.setProperty("--light-text-color", "#000");
      document.documentElement.style.setProperty("--dark-text-color", "#fff");
      document.documentElement.style.setProperty("--overlay-color", "#36343457");
      document.documentElement.style.setProperty("--card-Shadow", "1px 1px 2px 0 #000");
      document.querySelector(".overlay")
    } else {
      document.documentElement.style.setProperty("--main-color", "#fff");
      document.documentElement.style.setProperty("--secondary-color", "#eee");
      document.documentElement.style.setProperty("--light-text", "#fff");
      document.documentElement.style.setProperty("--dark-text-color", "#000");
      document.documentElement.style.setProperty("--overlay-color", "#ffffff69");
      document.documentElement.style.setProperty("--card-Shadow", "0 0 5px 0 #7777");


    }

    setDark(!dark);
  };
  return (
    
      <nav>

    <div className="content">
      <h1 className="title">
        To<span>Do</span>
      </h1>
      <div className="switch" onClick={() => toggleDarkMode()}>
        <span
          style={
            dark
              ? {
                  right: "-22px",
                }
              : {
                  right: "0",
                }
          }
        ></span>
      </div>
    </div>
    </nav>

  );
}

export default Navbar;

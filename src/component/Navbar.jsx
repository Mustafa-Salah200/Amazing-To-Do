import { useState } from "react";

function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    if (!dark) {
      document.documentElement.style.setProperty("--main-color", "#111");
      document.documentElement.style.setProperty("--secondary-color", "#333");
      document.documentElement.style.setProperty("--light-text-color", "#000");
      document.documentElement.style.setProperty("--dark-text-color", "#fff");
      document.documentElement.style.setProperty("--overlay-color", "#36343457");
      document.querySelector(".overlay")
    } else {
      document.documentElement.style.setProperty("--main-color", "#fff");
      document.documentElement.style.setProperty("--secondary-color", "#eee");
      document.documentElement.style.setProperty("--light-text", "#fff");
      document.documentElement.style.setProperty("--dark-text-color", "#000");
      document.documentElement.style.setProperty("--overlay-color", "#ffffff69");

    }

    setDark(!dark);
  };
  return (
    <div className="navbar">
      <h1 className="title">
        To<span>Do</span>
      </h1>
      <div className="switch" onClick={() => toggleDarkMode()}>
        <span
          style={
            dark
              ? {
                  right: "-22px",
                  backgroundColor: "#000",
                }
              : {
                  right: "0",
                  backgroundColor: "#fff",
                }
          }
        ></span>
      </div>
    </div>
  );
}

export default Navbar;

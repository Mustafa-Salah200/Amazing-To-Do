import { useState } from "react";
import AddTask from "./component/AddTask";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import ContextProvider from "./contextAPI/ContextProvider";
import SideBar from "./component/SideBar";
import { HashRouter, Route, Routes } from "react-router-dom";
import Favorite from "./component/Favorite";
import Details from "./component/Details";

function App() {
  const [show, setShow] = useState(false);

  const Checked = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <div className="container">
      <HashRouter>
        <ContextProvider>
          <SideBar />

          <div className="main">
            <Navbar Check={Checked} />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>

            {show && <AddTask Check={Checked} type="create" Data="" />}
          </div>
        </ContextProvider>
      </HashRouter>
    </div>
  );
}

export default App;

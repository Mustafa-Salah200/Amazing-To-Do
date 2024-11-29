import {  useState } from "react";
import AddTask from "./component/AddTask";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import Favorite from "./component/Favorite";
import SideBar from "./component/SideBar";
import { HashRouter, Route, Routes } from "react-router-dom";
import Details from "./component/Details";

function App() {
  const [show, setShow] = useState(false);
  const Checked = () => {
    show ? setShow(false) : setShow(true);
  };

  
  return (
    <div className="container">
      <HashRouter>
          <SideBar  Check={Checked} />
          <div className="main">
            <Navbar/>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
            {show && <AddTask Check={Checked} type="create" Data="" />}
          </div>
      </HashRouter>
    </div>
  );
}

export default App;

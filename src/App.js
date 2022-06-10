import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core"; // 'npm i @popper/core' and import jquery dependency otherwise features such as dropdown or toggle doesnt work
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import SideBar from "./components/sidebar";
import SelectPicture from "./components/selectPicture";
import FileUpload from "./components/fileUpload";
import Home from "./components/home";
import Prediction from "./components/prediction";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <SideBar />
        <div className="main p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/selectpicture" element={<SelectPicture />} />
            <Route path="/fileupload" element={<FileUpload />} />
            <Route path="/prediction" element={<Prediction />} />
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

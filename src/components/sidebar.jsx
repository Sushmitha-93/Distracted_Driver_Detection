import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState("");

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };

  return (
    <div class="sidenav col-md-3 p-5">
      <Link to="/ ">
        <h3>
          <b>Distracted Driver Detection</b>
        </h3>
        <b className="color">
          <i>Using Convolutional Neural Network and Transfer Learning</i>
        </b>
      </Link>
      <br />
      <br />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => handleMenuClick("about")}>
          <Link to="/">
            <a
              href="#"
              className={"nav-link" + (activeMenu === "about" ? " active" : "")}
            >
              About Project
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/selectpicture"
            onClick={() => handleMenuClick("selectPicture")}
          >
            <a
              href="#"
              className={
                "nav-link" + (activeMenu === "selectPicture" ? " active" : "")
              }
            >
              Test with Pictures!
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/fileupload"
            onClick={() => handleMenuClick("uploadPicture")}
          >
            <a
              href="#"
              className={
                "nav-link" + (activeMenu === "uploadPicture" ? " active" : "")
              }
            >
              Upload a Picture!
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div class="sidenav col-md-3 p-5">
      <h3>
        <b>Distracted Driver Detection</b>
      </h3>
      <b className="color">
        <i>Using Convolutional Neural Network and Transfer Learning</i>
      </b>
      <br />
      <br />
      <Link to="/">
        <a>Home</a>
      </Link>
      <br />
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <Link to="/selectpicture">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Test with picture
              </button>
            </Link>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Select any picture from unlabelled test pictures
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <Link to="/fileupload">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Upload a picture
              </button>
            </Link>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">Try uploading a picture of driver</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

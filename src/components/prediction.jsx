import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Prediction = () => {
  const location = useLocation();
  const imgLink = location.state; // state passed from "selectPicture" component (Line 42) in Link

  const [prediction, setPrediction] = useState({});

  const classes = [
    "Safe Driving",
    "Texting - Right",
    "Talking on the phone - Right",
    "Texting - Left",
    "Talking on the phone - Left",
    "Operating the radio",
    "Drinking",
    "Reaching behind",
    "Hair and makeup",
    "Talking to passenger",
  ];

  useEffect(() => {
    //const url = "http://127.0.0.1:8000/imageLink/?image_link=" + imgLink;
    const url =
      "https://thawing-retreat-25013.herokuapp.com/imageLink/?image_link=" +
      imgLink;

    axios({
      method: "post",
      url: url,
    })
      .then(function (response) {
        //handle success
        console.log(response.data);
        setPrediction(response.data);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }, []);

  return (
    <div className="row justify-content-center">
      <h2 className="text-center">Model Prediction</h2>
      <div className="col-md-9">
        <hr class="mt-2 mb-5"></hr>
      </div>
      <div>
        <img src={imgLink} class="rounded mx-auto d-block col-md-6"></img>
        <br />
        <br />
      </div>

      {typeof prediction.class !== "undefined" && (
        <div className="row justify-content-center">
          <div class="card col-md-6">
            <div class="card-body">
              <p>
                <b>Prediction:</b> Class {prediction.class} -{" "}
                {classes[prediction.class]}
              </p>
              <p>
                <b>Probability:</b> {prediction.probability}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prediction;

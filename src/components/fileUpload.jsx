import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [prediction, setPrediction] = useState({});

  const [file, setFile] = useState(); // To display uploaded image

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

  const handleChange = (e) => {
    console.log("In handlechange: ", e.target.files[0]);

    setSelectedFile(e.target.files[0]);
    setIsSelected(true);
    setPrediction({});

    // To display the uploaded image later
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(selectedFile);

    let formData = new FormData();
    formData.append("file", selectedFile);

    //const url = "http://127.0.0.1:8000/uploadfile/";
    const url = "http://44.203.70.143:8500/uploadfile/";

    axios({
      method: "post",
      url: url,
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        setPrediction(response.data);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  return (
    <React.Fragment>
      <div className="row justify-content-center">
        <h2 className="text-center">Upload Picture</h2>
        <div className="col-md-8">
          <hr class="mt-2 mb-5"></hr>

          <form>
            <div class="mb-3">
              <label for="file" class="form-label">
                Select file
              </label>
              <input
                class="form-control"
                type="file"
                id="file"
                onChange={handleChange}
              />
            </div>
          </form>

          {isSelected && (
            <div>
              <br />
              <h5>File Uploaded!</h5>
              <div className="row">
                <img src={file} class="col-md-5"></img>
                <p className="col">
                  <b>Filename:</b> {selectedFile.name} <br />
                  <b>Filetype:</b> {selectedFile.type} <br />
                  <b>Size in bytes:</b> {selectedFile.size} <br />
                  <b>lastModifiedDate:</b>{" "}
                  {selectedFile.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            </div>
          )}
          <br />
          {isSelected && typeof prediction.class === "undefined" && (
            <button
              type="submit"
              class="btn btn-primary btn-lg btn-block"
              onClick={handleSubmit}
            >
              Predict type of Distraction
            </button>
          )}
          {typeof prediction.class !== "undefined" && (
            <div className="row">
              <div class="card col-md-9">
                <div class="card-body">
                  <p>
                    <b>Prediction:</b> Class {prediction.class} -{" "}
                    <span className="color">
                      <b>{classes[prediction.class]}</b>
                    </span>
                  </p>
                  <p>
                    <b>Probability:</b> {prediction.probability}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default FileUpload;

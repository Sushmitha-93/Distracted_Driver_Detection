import React from "react";
import { Link } from "react-router-dom";
import Phase1Demo from "./phase1Demo";

const Home = () => {
  return (
    <div>
      <h4 className="text-center">
        <b>About the Project</b>
      </h4>
      <br />
      <p>
        Distracted driving is causing about 3000 deaths and 280,000 injuries per
        year according to National Highway Transportation and Safety
        Administration (NHTSA). Unfortunately distracted driving has become all
        too common these days with advent of smart phones and social media.
      </p>
      <p>
        Computer vision solutions based on machine learning image classification
        algorithms can be effectively used to detect inattentive drivers using
        any sort of dashboard cameras and alert drivers.{" "}
      </p>
      <p>
        Tasks carried out:
        <ul>
          <li>Select distracted driver image dataset.</li>
          <li>
            Explore different Machine Learning algorithms to classify images if
            driver is distracted or driving safe.
          </li>
          <li>
            Train and test model using distracted driver image dataset and
            evaluate accuracy.{" "}
          </li>
          <li>Save the best model.</li>
          <li>
            Deploy the model on FastAPI that accepts picture URL and take
            picture uploads to get prediction
          </li>
        </ul>
      </p>
      <Phase1Demo />
    </div>
  );
};

export default Home;

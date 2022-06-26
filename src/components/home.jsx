import React from "react";
import { Link } from "react-router-dom";

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
      <p>This project has been divided into 2 Phases:</p>
      <p>
        <b>
          {" "}
          <Link to="phase1demo">Phase 1:</Link>
        </b>
        <br />- Select distracted driver image dataset.
        <br />- Explore different Machine Learning algorithms to classify images
        if driver is distracted or driving safe.
        <br />- Train and test model using distracted driver image dataset and
        evaluate accuracy.
        <br />- Save the best model.
      </p>
      <p>
        <b>
          <Link to="phase2demo">Phase 2:</Link>
        </b>{" "}
        To detect and predict the distraction in real time that can be used by
        any user.
      </p>
      <p>
        <i>Challenges:</i>
      </p>
      <p>
        The image set used in Phase 1 is trained using same car model (having
        same interior), with fixed camera angle. Hence the model gives good
        acuracy when user is using same car with camera fixed in same position.
        The model may not provide good accuracy when used in different car model
        having different camera angle.
      </p>
      <p>
        We want to create solution that would be useful to all users using
        different car models where users can themselves fix a camera at the
        convinience of thier car.
      </p>
      <p>
        To achieve this, we plan to create solution that can collect vedio clip
        of user performing certain distracted actions and train model that can
        then be used for real time prediction.
      </p>
    </div>
  );
};

export default Home;

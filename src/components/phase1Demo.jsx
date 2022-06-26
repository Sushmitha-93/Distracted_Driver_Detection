import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Phase1Demo = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    function importAll(r) {
      let images = {};
      r.keys().map((item) => {
        images[item.replace("./", "")] = r(item);
      });
      return images;
    }

    const images = importAll(
      require.context("../images", false, /\.(png|jpe?g|svg|gif)$/)
    );

    setImages(images);
  }, []);

  return (
    <div>
      <h4 className="text-center">
        <b>About Phase 1</b>
      </h4>
      <br />
      <h4>Dataset</h4>
      <p>
        I've have chosen{" "}
        <a
          href="https://www.kaggle.com/competitions/state-farm-distracted-driver-detection/data"
          target="_blank"
        >
          State Farm's Distracted Driving image dataset
        </a>{" "}
        published on Kaggle for training our machine learning model. The Dataset
        set has over 100 thousand <b>640x480</b> pixels images of driver
        associated with one of below 10 actions.
      </p>
      <div className="row">
        <div className="col">
          <p>
            Below are the <b>10 classes</b> of images:
          </p>
          <p>
            <ol>
              <li>
                <b>c0: </b> safe driving{" "}
              </li>
              <li>
                <b>c1: </b>texting - right{" "}
              </li>
              <li>
                <b>c2: </b>talking on the phone - right{" "}
              </li>
              <li>
                <b>c3: </b>texting - left{" "}
              </li>
              <li>
                <b>c4: </b>talking on the phone - left{" "}
              </li>
              <li>
                <b>c5: </b>operating the radio{" "}
              </li>
              <li>
                <b>c6: </b>drinking{" "}
              </li>
              <li>
                <b>c7: </b>reaching behind{" "}
              </li>
              <li>
                <b>c8: </b>hair and makeup{" "}
              </li>
              <li>
                <b>c9: </b>
                talking to passenger
              </li>
            </ol>
          </p>
        </div>
        <div className="col">
          <br />
          <img src={images["classes.gif"]} width={"85%"} />
        </div>
      </div>
      <p>
        The data set consists of 3 files which are given below with their
        descriptions:
      </p>
      <p>
        <ol>
          <li>
            <b>imgs.zip</b> - zipped folder of all (train/test) images
          </li>
          <ul>
            <li>
              <b>Train set</b> has <b>22,424</b> images{" "}
              <b>labelled into 10 classes</b>.
            </li>{" "}
            <li>
              <b>Test set</b> has <b>79,726</b> are <b>unlabelled images</b>.
            </li>
          </ul>
          <li>
            <b>sample_submission.csv</b> - a sample submission file in the
            correct format
          </li>
          <li>
            {" "}
            <b>driver_imgs_list.csv</b> - a list of training images, their
            subject (driver) id, and class id
          </li>
        </ol>
      </p>
      <p>
        For training, the dataset was split to <b>7:3</b> ratio using sklearn
        trainTestSplit method. Where 70% of labelled images is used for training
        the model and remaining 30% for testing the model.
      </p>
      <br />
      <h4>Resnet-50</h4>
      <p>
        Out of the different machine learning algorithms tried, training
        TensorFlow's pre-trained <b>Resnet-50</b> with ImageNet weights
        (transfer learning) gave best results of <b>99% accuracy</b> in just 5
        epochs.
      </p>
      <p>
        Residual Neural Network (ResNet), is a deep layered architecture which
        range from 18 layers - ResNet-18 to 1202 layers deep - ResNet-1202.
        These layers are configured with gated units or "skip connections" that
        allow information to be passed to subsequent convolutional layers.
        ResNet also uses batch normalization to improve network stability.
      </p>
      <br />
      <h6>Demo</h6>
      <p>
        Backend: <b>FastAPI</b> to take image as requests and respond with
        prediction result using trained Resnet ML model to make predictions.
        FastAPI Docker container image is deployed and hosted on Heroku.
        <br /> Frontend: <b>ReactJS</b> application, Hosted on GitHub pages.
      </p>
      <p>
        Check out <Link to="/selectpicture">Phase 1 demo</Link> which uses the
        trained Renet-50 model to predict unlabelled test images
      </p>
      <p>
        <FaGithub />{" "}
        <a
          href="https://github.com/Sushmitha-93/Distracted-Driving-ML-API.git"
          target="_blank"
        >
          GitHub{" "}
        </a>
      </p>
      <br />
      <h6>
        <b>Model Summary:</b>
      </h6>
      <img
        src={images["model summary.png"]}
        alt="model summary"
        width={"50%"}
      />{" "}
      <br />
      <br />
      <h6>
        <b>Test Results:</b>
      </h6>
      <p>
        Dataset is split in 7:3 train test ratio for model training and
        evaluation.
      </p>
      <img
        src={images["traintestsplit.png"]}
        alt="train test split"
        width={"55%"}
      />
      <p>Achived 99% accuracy on test set after 5 epochs</p>
      <img src={images["epoch accuracy.png"]} alt="" width={"95%"} />
      <br />
      <br />
      <img src={images["epoch graph.png"]} alt="epoch graph" width={"95%"} />
      <br />
      <br />
      <h6>Classification Report</h6>
      <p>
        From classification report, we see that classification classes "C8":
        "hair and makeup", "C9": "talking to passenger" have less accuracy
        compared to other classes and have lower f1-score. Model may most likely
        misclassify these images.
      </p>
      <img src={images["classification report.png"]} alt="" width={"50%"} />
      <br />
      <br />
      <h6>Confusion Matrix</h6>
      <img src={images["confusion matrix.png"]} alt="" width={"50%"} />
      <br />
      <br />
    </div>
  );
};

export default Phase1Demo;

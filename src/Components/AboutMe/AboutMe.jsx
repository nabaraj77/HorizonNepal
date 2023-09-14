import React from "react";

import Typical from "react-typical";
import logo from "../../../public/Images/logo.jpg";

import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div className="container1" id="aboutMe">
      <div className="introBox">
        <div className="aboutMe">
          <div className="facebook">
            <i class="fa-brands fa-facebook "></i>
          </div>
          <div className="instagram">
            <i class="fa-brands fa-instagram "></i>
          </div>
        </div>
        <div className="intro">
          <div className="hello"> Hello From </div>
          <span className="nameSecond">
            Horizon Nepal Engineering Research and Construction.
          </span>
        </div>
        <div className="profession">
          <h1>
            <Typical
              loop={Infinity}
              className="loopName"
              steps={[
                "Construction",
                1000,
                "Facility Development",
                1000,
                "Residental Construction",
                1000,
              ]}
            />
          </h1>
        </div>
        <div className="des">
          Quality never goes out of style.Quality never goes out of style
        </div>
      </div>
      <div className="pic">
        <img className="imageCover " src={logo} alt="nabaraj Photo" />
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import "./AboutUs.css";
import NakshanImage from "../assets/Nakshan.png"; // Import the image

const AboutUs = () => {
  return (
    <div className="aboutCon1">
      <div className="aboutDiv1">
        <div className="image-box">
          <img src={NakshanImage} alt="Nakshan" />
        </div>
        <div className="description-box">
          <h1 className="here_1">Nakshan Ayoub</h1>
          <p className="DescriptionAbout_1">
            Final Year Student.</p>
          <p className="DescriptionAbout_1">nakshanayoub@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

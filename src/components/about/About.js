import React from "react";
import "./About.css";
import imgFoto from "../../media/yo.jpg"
const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me</h3>
        <p>
          I am a person, self-taught, I like new technologies in the world of programming, I really like reading and setting myself new challenges.
        </p>
      </div>
      <div className="about-img">
        <img
          src={imgFoto}
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;

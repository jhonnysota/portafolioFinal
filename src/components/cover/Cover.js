import React from "react";
import "./Cover.css";
import coverVideo from "../../media/video1.mp4";
// import Toggle from "../react-spring/toggle"
const Cover = () => {


  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>JHONNY SOTA </h1>
      {/* <Toggle /> */}
      <p>Developer | dSQL | REACTJS | REDUX </p>
    </div>
  );
};

export default Cover;

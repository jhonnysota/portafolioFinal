import React from "react";
import "./Cover.css";
import coverVideo from "../../media/video1.mp4";
const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1 className="animate__animated animate__bounce"> JHONNY SOTA </h1>
      <p> REACT | NODEJS | SQL Server</p>
    </div>
  );
};

export default Cover;

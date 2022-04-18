import React from "react";
import "./About.css";
// import imgFoto from "../../media/yo.jpg"
import ImgDemo from "../react-spring/cardIMG";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3 className="animate__animated animate__shakeX">
          Déjame decirte algo sobre mí
        </h3>
        <p>
          Programador con experiencia de dos años generando código para
          empresas, soy una persona autodidacta que se acopla facilmente al
          entorno laboral, a lo largo de mi carrera e utlizado diversos
          lenguajes de programacion pero mi especialidad es javascript y en base
          de datos SQl Server,me gusta mucho compartir lo que se, y nunca paro
          de aprender.
        </p>
      </div>
      <div className="about-img">
        <ImgDemo />
      </div>
    </div>
  );
};

export default About;

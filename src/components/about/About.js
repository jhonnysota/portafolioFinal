import React from "react";
import "./About.css";
import imgFoto from "../../media/yo.jpg"
const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me</h3>
        <p>
          Programador con más de cinco años de experiencia generando código para empresas del sector bancario. Creé el nuevo portal web de Santander, el cual recibe más de 1 millón de visitas al día. Los errores reportados en los micrositios del banco se redujeron en un 20% y la retención de usuarios incrementó en un 10%. Especialista en solución de problemas y trabajo en equipo.
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

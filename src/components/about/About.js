import React from "react";
import "./About.css";
// import imgFoto from "../../media/yo.jpg"
import ImgDemo from "../react-spring/cardIMG"


const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me</h3>
        <p>
          Programador con   experiencia de un año y medio  generando código para empresas para ERP.
          Creé el modulo de reporte.
          Los errores reportados los resolvia o mejoras que se implementaba dentro del sistema.
          Especialista en solución de problemas y trabajo en equipo.
          Creacion  de un lading page para otras empresa y solucion de errores en pagina de E-Commerce.

        </p>
      </div>
      <div className="about-img">
        <ImgDemo />
      </div>
    </div>
  );
};

export default About;

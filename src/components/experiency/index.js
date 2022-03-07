import React from "react";
import "./style.css";

const Index = () => {
  const data = [
    {
      img: "data:image/jpeg;base64,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",
      title: "Programador de software",
      business: "Amazontic - Jornada Completa",
      time: "oct. 2020 - ago. 2021 . 11 meses",
      site: "Lima, Perú",
      description:
        "desarrollo un sistema erp modulo de reporte lenguaje de programacion javascrip utilizando la libreria ReactJS, tambien manejo consultas en la base de datos y creacion de API",
    },
    {
      img: "data:image/jpeg;base64,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",
      title: "Desarrollador Web",
      business: "Ralitech · Jornada parcial",
      time: "mar. 2020 - jun. 2021 · 1 año 4 meses",
      site: "Lima, Perú",
      description:
        "Desarrollando la pagina principal de la empresa ralitech, utilizando javascript, Html5, boostraps4, css3, php. tarde un mes en desarrollar la pagina web.",
    },
  ];

  return (
    <div className="body-experiency">
      <h1 className="title-experiency">My Experience</h1>
      <div className="card-exp">
        {data.map((item) => {
          return (
            <div className="info-experiency">
              <div>
                <img className="img-exp" src={item.img} alt="logoEmpresa" />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.business}</p>
                <p>{item.time}</p>
                <p>{item.site}</p>
                <p>{item.description}</p>
                <hr />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;

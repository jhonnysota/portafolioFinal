import React from 'react';
import "./style.css"
const experiency = () => {

  const data = [
    {
      tipo: "FRONTEND    ",
      Description: "TENGO 1 año de experiencia en el desarrollo frontend"
    },
    {
      tipo: "BACKEND     ",

      Description: "TENGO 1 año de experiencia en el desarrollo BACKEND"
    },
    {
      tipo: "BASE DE DATOS",

      Description: "TENGO 1 año de experiencia en el desarrollo BASE DE DATOS"
    }
  ]
  return <div style={{ background: "white" }}>
    <h1 style={{ textAlign: "center" }}> Experiencia </h1>
    <div className="body-experiency">
      {data.map((data, index) => {
        return (<div className="card">
          <div className="carTotal">
            <div className="card-title"> {data.tipo}</div>
            <div>{data.Description}</div>
          </div>
        </div>)
      })
      }
    </div>
  </div>;

};

export default experiency;

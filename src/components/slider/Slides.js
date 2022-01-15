import React from "react";
import "./Slider.css";
import GitExpert from "../../media/gitExpert.png";
import Ralitech from "../../media/ralitech.png";
import CienFragancia from "../../media/cienFragancia.png"
const slidesInfo = [
  {
    src: GitExpert,
    alt: "Gif - Consult",
    desc: "GIT Expert",
    href: "https://jhonnysota.github.io/GIFexpertapp/"
  },
  {
    src: Ralitech,
    alt: "Pagina Web-Ralitech",
    desc: "Pagina Oficial-Ralitech",
    href: "http://www.ralitech.pe/"
  },
  {
    src: CienFragancia,
    alt: "Cien Fragancia",
    desc: "Cien Fragancia",
  },
];

const slides = slidesInfo.map((slide) => (

  <div className="slide-container">
    <a href={slide?.href} target="_blank" rel="noreferrer">
      <img src={slide.src} alt={slide.alt} />
    </a>

    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>


  </div>
));

export default slides;

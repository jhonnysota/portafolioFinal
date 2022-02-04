import React, { useState, useEffect, memo } from "react";
import "./App.css";
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Slider from "./components/slider/Slider";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";
import Experiency from "./components/experiency"
import pdf from "./media/cvJhonnySota.pdf"
const App = () => {

  const [scrollHeight, setScrollHeight] = useState(0);
  const [widthPage, setWidthPage] = useState(window.innerWidth);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    return window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);


  const resize = () => {
    setWidthPage(window.innerWidth)
  }

  useEffect(() => {
    return window.addEventListener("resize", resize);
  }, [widthPage])

  const handlePosition = (value) => {
    if (value) {
      const refCover = document.querySelectorAll(value)
      const position = refCover[0].offsetTop - 50
      position && window.scrollTo({ top: position, left: 0, behavior: "smooth" })
    }
  }

  useEffect(() => {
    handlePosition()
  }, [setWidthPage])

  const handleDowloadPDF = () => {

    // const records = data ?? []
    // const blob = new Blob([records])
    // const fileDownloadUrl = URL.createObjectURL(blob)
    let a = document.createElement('A')
    a.href = pdf
    a.class = 'gx-d-none'
    a.download = 'CV-JHONNYSOTA.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} widthPage={widthPage} handlePosition={handlePosition} />
      <Cover />
      <About />
      <Slider />
      <Experiency />
      <Info />
      <Footer />

      <span class="circle"></span>
      <button className="botonF1" onClick={handleDowloadPDF}>
        <i className="fas fa-file-pdf"></i>
      </button>
    </div>
  );
}

export default memo(App);

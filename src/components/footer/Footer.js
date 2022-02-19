import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Jhonny Sota</h1>
        <p>Perú, Lima</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By jhonny sota </div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/jhonny-sota-bautista-21288314b/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://api.whatsapp.com/send?phone=+961190121&text=he%20visto%20tu%20pagina,%20y%20deseamos%20hablar%20contigo." target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp twitter"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100001123840740" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

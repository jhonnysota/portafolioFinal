import React from "react";
import "./Navbar.css";
import { bubble as Menu } from "react-burger-menu";
// import logo from "../../media/logopagina.png";
const Navbar = ({ isScrolling, widthPage, handlePosition }) => {
  const handleInitial = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const handleEnd = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className="navbar-logo">
          {/* <img src={logo} alt="Logo" style={{ width: "100px", position: 'fixed', marginTop: '1%' }} /> */}
          JS
          {widthPage >= 930 && (
            <ul className="gx-nav-ul">
              <li className={"gx-nav-li"}>
                <h4 id="home" className="gx-menu-item" onClick={handleInitial}>
                  {" "}
                  <i
                    className="fas fa-home"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Home
                </h4>
              </li>
              <li className="gx-nav-li">
                <h4
                  id="about"
                  className="gx-menu-item"
                  onClick={() => handlePosition(".about-container")}
                >
                  <i
                    className="fas fa-address-card"
                    style={{ marginRight: "10px" }}
                  ></i>
                  About
                </h4>
              </li>
              <li className="gx-nav-li">
                <h4
                  id="contact"
                  className="gx-menu-item"
                  onClick={() => handlePosition(".carousel-container")}
                >
                  <i
                    className="fas fa-tasks"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Project
                </h4>
              </li>
              <li className="gx-nav-li">
                <h4
                  className="gx-menu-item"
                  onClick={() => handlePosition(".body-experiency")}
                >
                  <i
                    className="fas fa-database"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Experience
                </h4>
              </li>
              <li className="gx-nav-li">
                <h4 className="gx-menu-item" onClick={handleEnd}>
                  <i
                    className="fas fa-phone-square-alt"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Contactame
                </h4>
              </li>
            </ul>
          )}
        </div>
      </nav>
      {widthPage <= 930 && (
        <Menu>
          <div>
            <ul className="nav-ul">
              <li className="nav-li">
                <h1 id="home" className="menu-item" onClick={handleInitial}>
                  {" "}
                  <i
                    className="fas fa-home"
                    style={{ marginRight: "20px" }}
                  ></i>
                  Home
                </h1>
              </li>
              <li className="nav-li">
                <h1
                  id="about"
                  className="menu-item"
                  onClick={() => handlePosition(".about-container")}
                >
                  <i
                    className="fas fa-address-card"
                    style={{ marginRight: "20px" }}
                  ></i>
                  About
                </h1>
              </li>
              <li className="nav-li">
                <h1
                  id="contact"
                  className="menu-item"
                  onClick={() => handlePosition(".carousel-container")}
                >
                  <i
                    className="fas fa-tasks"
                    style={{ marginRight: "20px" }}
                  ></i>
                  Project
                </h1>
              </li>
              <li className="nav-li">
                <h1 className="menu-item">
                  <i
                    className="fas fa-camera"
                    onClick={() => handlePosition(".body-experiency")}
                    style={{ marginRight: "20px" }}
                  ></i>
                  Experience
                </h1>
              </li>

              <li className="nav-li">
                <h1 className="menu-item" onClick={handleEnd}>
                  <i
                    className="fas fa-camera"
                    style={{ marginRight: "20px" }}
                  ></i>
                  Contactame
                </h1>
              </li>
            </ul>
          </div>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;

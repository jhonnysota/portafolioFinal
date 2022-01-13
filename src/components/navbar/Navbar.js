import React from "react";
import "./Navbar.css";
import { bubble as Menu } from 'react-burger-menu'
const Navbar = ({ isScrolling }) => {
  console.log("🚀 ~ file: Navbar.js ~ line 5 ~ Navbar ~ isScrolling", isScrolling)
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const showSettings = (e) => {
    e.preventDefault();
    console.log("🚀 ~ file: Navbar.js ~ line 11 ~ showSettings ~ e", e)
  }


  return (
    <div>
      <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className="navbar-logo" onClick={toTheTop}>
          Your name
        </div>
      </nav>
      {isScrolling > 200 && <Menu    >
        <div>
          <ul className="nav-ul">
            <li className="nav-li">
              <a id="home" className="menu-item" href="/"> <i className="fas fa-camera" style={{ marginRight: '20px' }}></i>Home</a>
            </li>
            <li className="nav-li">
              <a id="about" className="menu-item" href="/about"><i className="fas fa-camera" style={{ marginRight: '20px' }}></i>About</a>
            </li>
            <li className="nav-li">
              <a id="contact" className="menu-item" href="/contact"><i className="fas fa-camera" style={{ marginRight: '20px' }}></i>Contact</a>
            </li>
            <li className="nav-li">
              <a onClick={showSettings} className="menu-item" href=""><i className="fas fa-camera" style={{ marginRight: '20px' }}></i>Settings</a>
            </li>
          </ul>


        </div>

      </Menu>}
    </div>

  );
};

export default Navbar;

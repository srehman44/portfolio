import "./Navbar.css";
import { React, useState } from "react";
import brand from "../brand3.png";

const Navbar = () => {
  const [active, setActive] = useState("nav-link");

  const linkActive = (event) => {
    console.log(event.target.id);
    setActive("nav-link active");
  };

  return (
    <nav
      className="navbar navbar-expand-sm navbar-light bg-white sticky-top"
      // className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark"
      id="navigation"
    >
      <div className="container-fluid">
        <img id="image" src={brand} width="100" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="toggle-button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 fw-bolder">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                // onclick="$('#toggle-button').click()"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#skills" id="skills">
                My Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#work" id="work">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <header>
    //   <img className="logo" src="" width="100"></img>
    //   <nav>
    //     <ul className="nav__links">
    //       <li>
    //         <a href="#">Home</a>
    //       </li>
    //       <li>
    //         <a href="#about">About</a>
    //       </li>
    //       <li>
    //         <a href="#skills">Skills</a>
    //       </li>
    //       <li>
    //         <a href="#work">Work</a>
    //       </li>
    //       <li>
    //         <a href="#contact">Contact</a>
    //       </li>
    //     </ul>
    //   </nav>
    //   <button>Contact</button>
    // </header>
  );
};

export default Navbar;

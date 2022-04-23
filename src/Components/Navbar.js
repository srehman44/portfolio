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
      className="navbar navbar-expand-sm sticky-top navbar-light bg-white"
      id="navigation"
    >
      <div className="container-fluid">
        <img src={brand} width="100" href="#" />
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
              <a className="nav-link active" href="#skills" id="test1">
                My Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#work" id="test2">
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
    // <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light">
    //   <div className="container">
    //     <a className="navbar-brand" href="#">
    //       Brand
    //     </a>
    //     <button
    //       className="navbar-toggler navbar-toggler-right"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbar1"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbar1">
    //       <ul className="navbar-nav">
    //         <li className="nav-item active">
    //           <a className="nav-link" href="#">
    //             Link
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Link
    //           </a>
    //         </li>
    //       </ul>
    //       <ul className="navbar-nav ml-auto">
    //         <li className="nav-item active">
    //           <a className="nav-link" href="#">
    //             Link
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;

import React from "react";
import "./Navbar2.css";

const Navbar1 = () => {
  return (
    // <nav class="sticky">
    //   <ul>
    //     <li>
    //       <a href="#">Home</a>
    //     </li>
    //     <li>
    //       <a href="#about">About</a>
    //     </li>
    //     <li>
    //       <a href="#skills">Skills</a>
    //     </li>
    //     <li>
    //       <a href="#work">Work</a>
    //     </li>
    //     <li>
    //       <a href="#contact">Contact</a>
    //     </li>
    //   </ul>
    // </nav>
    <>
      <header>
        <h1 class="logo">SYED REHMAN</h1>
        <input type="checkbox" id="nav-toggle" class="nav-toggle" />
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <label for="nav-toggle" class="nav-toggle-label">
          <span></span>
        </label>
      </header>
    </>
  );
};

export default Navbar1;

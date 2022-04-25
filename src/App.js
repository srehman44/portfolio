import "./App.css";
import Navbar1 from "./Components/Navbar1";

import Landing from "./Components/Landing";
import About from "./Components/About1";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    // <div class="fullPage">
    <div className="full">
      {/* <Navbar /> */}
      <Navbar1 />
      <Landing id="landing" />
      <About id="about" />
      <Skills id="skills" />
      <Work id="work" />
      <Contact id="contact" />
      {/* <footer
        style={{
          textAlign: "center",
          backgroundColor: "grey",
          color: "white",
        }}
      >
        All Rights Reserved
      </footer> */}
    </div>
    // </div>
  );
}

export default App;

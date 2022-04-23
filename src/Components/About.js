import "./About.css";

import work from "../about2.png";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="About" id="about">
      <div className="About1">
        {/* <div className="About__me">About Me</div> */}
        <div className="About__details">
          <h1>About Me</h1>
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            unde saepe magni hic cupiditate eum aperiam sunt minus voluptate
            expedita architecto quidem, quos itaque veritatis alias! Hic
            voluptas quaerat molestias.
          </h2>
        </div>
      </div>
      <div className="About_List">
        <div data-aos={"fade-down"} className="About__Image">
          <img src={work} className="App-logo" alt="logo" width="600" />
        </div>
      </div>
    </div>
  );
};

export default About;

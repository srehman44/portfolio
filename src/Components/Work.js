import "./Work.css";

// import work from "../work2.png";

import work from "../work4.png";

import { useState, useEffect } from "react";

// import { useTransition, animated } from "react-spring";

import Aos from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="Work" id="work">
      <div className="Work1">
        {/* <div className="Work__me">Work Portfolio</div> */}
        <div className="Work__details">
          <h1>Work Portfolio</h1>
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            unde saepe magni hic cupiditate eum aperiam sunt minus voluptate
            expedita architecto quidem, quos itaque veritatis alias! Hic
            voluptas quaerat molestias.
          </h2>
        </div>
      </div>
      <div className="Work_List">
        <div data-aos="zoom-in-down" className="Work__Image">
          <img src={work} className="App-logo" alt="logo" width="600" />
        </div>
      </div>
    </div>
  );
};

export default Work;

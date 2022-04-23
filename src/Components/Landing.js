import "./Landing.css";

import avatar from "../test.gif";

import avatar2 from "../cleaned.gif";

import avatar3 from "../white_cleaned.gif";
import React from "react";
// import { useSpring, animated } from "react-spring";

const Landing = () => {
  // const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <div className="landing">
      {/* <div className="graphic">
        <img src={undraw_scrum} alt="logo" width="300" />
      </div> */}

      <div className="Name">
        {/* <div className="About__text"> */}
        <div className="intro__text">
          <div className="Hi">Hi,</div>
          <div className="Im">I am Syed</div>
          <div className="FSD">Full Stack Developer</div>
        </div>
        {/* <div className="image"> */}
        <div className="intro__image">
          <img src={avatar} className="App-logo" alt="logo" width="300" />
        </div>
      </div>
      <div className="PP">Welcome to my personal Page</div>
    </div>
  );
};

export default Landing;

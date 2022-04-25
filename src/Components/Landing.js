import "./Landing.css";

import avatar from "../test.gif";

import avatar2 from "../cleaned.gif";

import avatar3 from "../white_cleaned.gif";
import React from "react";

const Landing = () => {
  return (
    <div className="landing">
      <div className="Name">
        <div className="intro__text">
          <div className="Hi">Hi,</div>
          <div className="Im">I am Syed</div>
          <div className="FSD">Full Stack Developer</div>
        </div>
        <div className="intro__image">
          <img src={avatar} className="App-logo" alt="logo" width="300" />
        </div>
      </div>
      <div className="PP">Welcome to my personal Page</div>
    </div>
  );
};

export default Landing;

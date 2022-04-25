import "./Skills1.css";

import work from "../work2.png";

import { useState, useEffect } from "react";

// import { useTransition, animated } from "react-spring";

import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  // const transition = useTransition(true, {});

  // const [items] = useState([
  //   { id: "0", title: "Text1" },
  //   { id: "1", title: "Text2" },
  //   { id: "2", title: "Text1" },
  // ]);

  // const [index, setIndex] = useState(0);

  // const transitions = useTransition(items[index], (index) => index.id, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   config: { tension: 220, friction: 120 },
  // });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((state) => (state + 1) % items.length);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, [items.length]);

  return (
    <div className="Skillz" id="skills">
      <div className="Skillz_About">
        <div data-aos="fade-up" className="Skillz__Image">
          <img src={work} className="App-logo" alt="logo" />
        </div>
      </div>
      <div className="Skillz_List">
        <div className="Skillz_List2">
          <div className="Skillz__About__text">
            <div className="My_Skillz">My Skills</div>
          </div>
          <h2>HTML</h2>
          <div className="container__html">
            <div className="skills html"></div>
          </div>

          <h2>CSS</h2>
          <div className="container__css">
            <div className="skills css"></div>
          </div>

          <h2>JavaScript</h2>
          <div className="container__js">
            <div className="skills js"></div>
          </div>

          <h2>ReactJS</h2>
          <div className="container__ReactJS">
            <div className="skills ReactJS"></div>
          </div>
          <h2>Python</h2>
          <div className="container__Python">
            <div className="skills Python"></div>
          </div>
          <h2>Flask</h2>
          <div className="container__Flask">
            <div className="skills Flask"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

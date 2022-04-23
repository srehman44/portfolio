import "./App.css";
import Navbar from "./Components/Navbar";

import Landing from "./Components/Landing";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
function App() {
  return (
    // <div class="fullPage">
    <div className="full">
      <Navbar />
      <Landing id="landing" />
      <About id="about" />
      <Skills id="skills" />
      <Work id="work" />
      <Contact id="contact" />
      <footer
        style={{
          textAlign: "center",
          backgroundColor: "grey",
          color: "white",
        }}
      >
        All Rights Reserved
      </footer>
    </div>
    // </div>
  );
}

export default App;

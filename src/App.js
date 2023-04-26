import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects"
import About from "./components/About"
import Contactme from "./components/Contactme"
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Qualifications from "./components/Qualifications";

const App = () => {
  return <div>
    <Header />
    <Main />
    <About />
    <Skills />
    <Qualifications />
    <Projects />
    <Contactme/>
    <Footer/>
  </div>;
};

export default App;

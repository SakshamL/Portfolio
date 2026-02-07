import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./Sections/Navigation";
import { Route, Routes } from "react-router-dom";
import Hero from "./Sections/Hero";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navigation />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

import React, { useEffect } from "react";
import ProNav from "./Components/Navbar/ProNav";
import { Routes, Route } from "react-router-dom";


import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact';
import Courses from './Components/Courses/Courses';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Aos from 'aos';
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <ProNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";

const Home = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

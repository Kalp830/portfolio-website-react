import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

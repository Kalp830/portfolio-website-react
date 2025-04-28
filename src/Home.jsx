import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";

const Home = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Skills />
    </>
  );
};

export default Home;

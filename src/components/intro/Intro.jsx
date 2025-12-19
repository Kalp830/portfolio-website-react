import React from "react";
import bg from "../../assets/images/image.png";
import "./intro.css";
import { Link } from "react-scroll";
import btnImg from "../../assets/images/hireme.png";
import Skills from "../skills/Skills";

const Intro = () => {
  return (
    <>
      <section id="intro">
        <div className="container">
          <div className="row">
             <div className="col-md-12 d-flex justify-content-center">
        <div className="introContent">
           <div className="d-flex flex-column justify-content-center">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Kalpesh</span> <br /> Website
            Designer
          </span>
          <p className="introPara">
            I am a skilled web designer with experience in creating visually
            <br />
            appealing and user friendly websites.
          </p>
           <a className="btn btn-lg">Hire Me</a>
          </div>
        </div>
        </div>
        {/* <div className="col-md-6">
        <img src={bg} alt="profile" className="img-fluid" />
        </div> */}
        </div>
        </div>
      </section>
    </>
  );
};

export default Intro;

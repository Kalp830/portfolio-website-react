import React from "react";
import "./intro.css";
import ProfileImg from '../../assets/images/kalpesh.png';
import Pdf from '../../assets/doc/kalpesh-CV.pdf';

const Intro = () => {
  return (
    <>
      <section id="intro">
        <div className="container">
          <div className="row">
             <div className="col-md-12">
        <div className="introContent">
           <div className="d-flex flex-column justify-content-center">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Kalpesh Talekar</span>  
                  </span>
            <span className="display-6 pb-4">UI/UX / Frontend Developer </span>
          <p className="introPara">

I'm a UI/UX and Frontend Developer and I build for the Universe.
                  </p>
                </div>
                <div className="downloadBtn d-flex justify-content-between m-auto col-md-6">
                  <a href={Pdf} download className="btn btn-lg btn-outline-secondary mr-5">Download CV</a>
                  <a href="https://www.linkedin.com/in/kalpesh-talekar-05533794/" target="_blank" className="btn btn-lg btn-outline-secondary ml-3">Linkedin Profile</a>
                  <a href="https://www.behance.net/kalpesh2283" target="_blank" className="btn btn-lg btn-outline-secondary ml-3">Behance Profile</a>

                </div>
                {/* <div className="header__profile-image-container clearfix">
                  <img src={ProfileImg} alt="profile" className="img-fluid" width="250" />
                  
                </div> */}
               
              </div>
              
        </div>
       
        </div>
        </div>
      </section>
    </>
  );
};

export default Intro;

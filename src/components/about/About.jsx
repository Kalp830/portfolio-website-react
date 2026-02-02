import React from "react";
import "./about.css";
import ProfilePhoto from "../../assets/images/profile-photo.jpg";
import { Container, Row, Col, } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <section id="about" className="skills">
        <h6 className="mb-0">Get to Know</h6>
        <span className="skillTitle">About Me</span>
       
        <Container>
          <Row>
            <Col lg={5} className="d-flex justify-content-center">
          <div className="img-container">
            <div className="about_me">
               <div className="about_me-image">
           <img className="img-fluid" src={ProfilePhoto} alt="my image"/>
           </div>
           </div>
           </div>
            </Col>
            <Col lg={7} className="mt-sm-5">
            <div className="skillDes text-start">
       <p> As a UI UX and Frontend Developer, I have extensive experience in
creating modern web applications and user interfaces. My expertise
includes React.js, JavaScript, and CSS frameworks, ensuring responsive
and visually appealing designs. </p>
<p>With a solid foundation in UI/UX principles
and a commitment to quality, I thrive in collaborative environments and am
                  driven to produce innovative solutions that enhance user experiences.</p>
                <p>I am committed to continuous learning and strive to become a top-tier developer in the tech industry.</p>
                <button className="btn btn-md bg-primary text-white">Let's Talk</button>
        </div>
        
            </Col>
            
            </Row>
          </Container>
        
      </section>

       
    </>
  );
};

export default About;

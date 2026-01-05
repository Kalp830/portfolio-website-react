import React from "react";
import "./skills.css";
import UiDesign from "../../assets/images/ui-design.png";
import WebDesign from "../../assets/images/website-design.png";
import AppDesign from "../../assets/images/app-design.png";
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';

const Skills = () => {
  return (
    <>
      <section id="skills">
        <h6 className="mb-0">Get to Know</h6>
        <span className="skillTitle">About Me</span>
       
        <Container>
          <Row>
            <Col lg={5}>
           <img src={WebDesign} alt="my image"></img>
            </Col>
            <Col lg={7}>
            <span className="skillDes text-start">
       <p> As a UI UX and Frontend Developer, I have extensive experience in
creating modern web applications and user interfaces. My expertise
includes React.js, JavaScript, and CSS frameworks, ensuring responsive
and visually appealing designs. With a solid foundation in UI/UX principles
and a commitment to quality, I thrive in collaborative environments and am
                  driven to produce innovative solutions that enhance user experiences.</p>
                <p>I am committed to continuous learning and strive to become a top-tier developer in the tech industry.</p>
        </span>
            </Col>
            
            </Row>
          </Container>
        
      </section>

       
    </>
  );
};

export default Skills;

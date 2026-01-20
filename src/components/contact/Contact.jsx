import React, { useRef } from "react";
import "./contact.css";
import { Container, Row, Col } from 'react-bootstrap';
import { Envelope, Whatsapp } from "react-bootstrap-icons";

const Contact = () => {
  return (
    <section className="contact">
      <div className="clients contactPage">
        <h6>Get in Touch</h6>
        <h2 className="contactPageTitle">Contact Me</h2>
        <Container>
            <Row>
              <Col lg={4} md={4} className="offset-lg-2 offset-md-2 offset-sm-0" >
              <div className="contact-info">
                 <Envelope size="30" className="mb-2"/>
                 <h5>Email</h5>
                 <h6>talekar.kt@gmail.com</h6>
                 <a className="link-opacity-75-hover" href="mailto:talekar.kt@gmail.com"  target="blank">Send a message</a>
              </div>
              </Col>
              <Col lg={4} md={4}>
              <div className="contact-info">
                 <Whatsapp size="30" className="mb-2"/>
                 <h5>WhatsApp</h5>
                 <h6>+91 9723709962</h6>
                 <a href="https://api.whatsapp.com/send?phone=919723709962" target="_blank">Chat on WhatsApp</a>

              </div>
              </Col>
             
            </Row>
        </Container>
       
      </div>
      {/* <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDes">
          Please fill out the form below to discuss any work opportunities
        </span>
       
         <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={TwitterIcon} alt="Twitter" className="link" />
            <img src={YouTubeIcon} alt="Youtube" className="link" />
            <img src={InstaIcon} alt="Instagram" className="link" />
          </div>
      </div> */}
    </section>
  );
};

export default Contact;

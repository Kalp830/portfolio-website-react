import React, { useRef } from "react";
import "./contact.css";
import WalMart from "../../assets/images/walmart.png";
import Adobe from "../../assets/images/adobe.png";
import Microsoft from "../../assets/images/microsoft.png";
import Facebook from "../../assets/images/facebook.png";
import FacebookIcon from "../../assets/images/facebook-icon.png";
import TwitterIcon from "../../assets/images/twitter.png";
import YouTubeIcon from "../../assets/images/youtube.png";
import InstaIcon from "../../assets/images/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", "#myForm").then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };
  return (
    <section className="contactPage">
      <div className="clients">
        <h6>My contact</h6>
        <h2 className="contactPageTitle">My Contact</h2>
        <p className="clientDes">
          I had the opportunity to work with a diverse group of companies. Some
          of the notable compamies I have worked with includes.
        </p>
        <div className="clientImgs">
          <img src={WalMart} alt="walmart" className="clientImg" />
          <img src={Adobe} alt="adobe" className="clientImg" />
          <img src={Microsoft} alt="microsoft" className="clientImg" />
          <img src={Facebook} alt="facebook" className="clientImg" />
        </div>
      </div>
      <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDes">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form}>
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="msg"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={TwitterIcon} alt="Twitter" className="link" />
            <img src={YouTubeIcon} alt="Youtube" className="link" />
            <img src={InstaIcon} alt="Instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import "./footer.css";


const Footer = () => {
  const currentYear = new Date().getFullYear(); 
  return (
    <section id="footer">
       <div className="flex-column text-center">
           <h2>Kalpesh Talekar</h2>
           <h6>Built with ReactJS, React-Bootstrap</h6>
            <p>Copyright &#169; {currentYear} Kalpesh Talekar. All right received.</p>
          
          </div>
     
    </section>
  );
};

export default Footer;

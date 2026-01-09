import React from 'react';
import './portfolio.css';
import { Container, Row, Col } from 'react-bootstrap';
import LeadCrm from "../../assets/images/portfolio/lead-crm.jpg";
import PixelProtect from "../../assets/images/portfolio/pixel2-protect.jpg";
import AstraKart from "../../assets/images/portfolio/astrakart.jpg";
import Nexcent from "../../assets/images/portfolio/nexcent.jpg";

const portfolioData = [
    {
      image: LeadCrm,
      title:'Lead Crm Website',
      subtitle:'Professional Lead Management System',
      link:'https://leadcrmwebsite.netlify.app/'
    },
    {
      image: PixelProtect,
      title:'Pixel2 Prospect Website',
      subtitle:'Magical start up solution',
      link:'https://kalp830.github.io/pixel2-prospect/'
    },
    {
      image: AstraKart,
      title:'Interior Design Website',
      subtitle:'Interior Design and Bespoke Furniture Solutions',
      link:'https://www.astrakatdesigns.com/'
    },
    {
      image: Nexcent,
      title:'Nexcent Website',
      subtitle:'React Demo site for business',
      link:'https://kalp830.github.io/react-landing-page/'
    },
    {
      image: LeadCrm,
      title:'Lead Crm Website',
      subtitle:'Professional Lead Management System',
      link:'https://leadcrmwebsite.netlify.app/'
    },
    {
      image: LeadCrm,
      title:'Lead Crm Website',
      subtitle:'Professional Lead Management System',
      link:'https://leadcrmwebsite.netlify.app/'
    }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
         <Container>
         <h6>My Recent Work</h6>
         <h2 className="portfolioPageTitle">My Portfolio</h2>
         <Row>
          {portfolioData.map((curEle, index)=>(
            <Col lg={4} md={6} sm={12} key={index} className='mb-4'>
              <div className='bg-card'>
               <img src={curEle.image} alt={curEle.title} className='img-fluid' />
              <div className='card-content'>
                <h3>{curEle.title}</h3>
                <h6>{curEle.subtitle}</h6>
              </div>
                <div className='portlink-btn'>
                <a className='link-btn btn-lg' href={curEle.link} target='_blank'>Live link</a>
                </div>
              
              </div>
           </Col>
          ))}
          
         </Row>
        </Container>
    </section>
  )
}

export default Portfolio;
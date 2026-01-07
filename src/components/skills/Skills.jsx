import React from "react";
import "./skills.css";
import { Container, Row, Col } from 'react-bootstrap';
import { CheckCircleFill } from "react-bootstrap-icons";

const Skills = () => {
  const skillsData = [
    {
    title:"Design & Development",
    items:[
      "HTML",
      "CSS3",
      "SaSS",
      "Bootstrap",
      "React Bootstrap",
      "Material UI",
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "Tailwind",
      "Figma",
      "Photoshop",
      "XD",
      "Illustrator",
      "Responsive Design"
    ]
    },
    {
    title: "Soft Skills",
    items: [
      "Teamwork",
      "Problem Solving",
      "Creativity",
      "Time Management",
      "Self-Learner",
      "Flexibility",
      "Pixel Perfect Design",
    ]
  },
  ];
  return (
    <section id="works">
      <Container>
      <h6>What Skills I Have</h6>
      <h2 className="worksTitle">My Experience</h2>
      <div className="worksDes">
        <p>
          I take pride in paying attention to the smallest details and making
          sure that my work is pixel perfect. I am excited to bring my skills
          and experience to help business achieve their goals and create a
          strong online presence.
        </p>
       
          <Row className="g-4">
            {skillsData.map((item, index)=>(
              <Col lg={6} key={index}>
               <div className="skills-card">
                 <h4 className="skills-title">{item.title}</h4>
              <Row>
                {item.items.map((skill, index)=>(
                      <Col xs={12} md={6} key={index} className="mb-3">
                        <div className="skill-item">
                           <CheckCircleFill  className="skill-icon"/>
                           <span>{skill}</span>
                        </div>
                      </Col>
                ))}
              </Row>
               </div>
              </Col>
            ))}
          </Row>
      </div>
      </Container>
    </section>
  );
};

export default Skills;

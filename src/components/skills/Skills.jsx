import React from "react";
import "./skills.css";
import UiDesign from "../../assets/images/ui-design.png";
import WebDesign from "../../assets/images/website-design.png";
import AppDesign from "../../assets/images/app-design.png";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDes">
        As a UI UX and Frontend Developer, I have extensive experience in
creating modern web applications and user interfaces. My expertise
includes React.js, JavaScript, and CSS frameworks, ensuring responsive
and visually appealing designs. With a solid foundation in UI/UX principles
and a commitment to quality, I thrive in collaborative environments and am
driven to produce innovative solutions that enhance user experiences
        </span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={UiDesign} alt="UI Design" className="skillBarImg" />
            <div className="skillBarText">
              <h2>UI/UX design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, incidunt.
              </p>
            </div>
          </div>
        </div>
        <div className="skillBars">
          <div className="skillBar">
            <img src={WebDesign} alt="Web Design" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Website Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad!
              </p>
            </div>
          </div>
        </div>
        <div className="skillBars">
          <div className="skillBar">
            <img src={AppDesign} alt="App Design" className="skillBarImg" />
            <div className="skillBarText">
              <h2>App Design</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

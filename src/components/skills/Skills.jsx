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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorem,
          voluptatem culpa quia aperiam dicta consectetur voluptatibus iste
          porro nisi placeat numquam quisquam, velit illo distinctio facere
          dignissimos ex nam.
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

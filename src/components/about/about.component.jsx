import React from "react";
//STYLES
import "./about.styles.scss";
//COMPONENTS
import Skills from "../skills/skills.component";
//IMAGES
import BlueBg from "../../assets/images/Imagen2.png";
//ANIMATIONS-ON-SCROLL
import Fade from "react-reveal/Fade"; // Importing Zoom effect

const About = () => {
  return (
    <div className="about">
      <img className="about-image" src={BlueBg} alt="" />
      <div className="about-info-container">
        <div className="about-title">About....</div>
        <div className="about-info">
          <Fade bottom>
            I am a junior frontend web developer who invests a great deal of
            time on learning the most recent utmost technologies. I love
            designing websites, that is where I find the most satisfying
            challenges as that is how my creativeness rolls out.
            <br />
            Besides coding, you’ll find me reading some books, playing my
            guitar, and jogging all across the city with loud music on my
            headphones...
          </Fade>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default About;

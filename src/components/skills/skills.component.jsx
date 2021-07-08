import React from "react";
//STYLES
import "./skills.styles.scss";
//ICONS
import { TiCss3 } from "react-icons/ti";
import { RiHtml5Line } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
//ANIMATIONS-ON-SCROLL
import Zoom from "react-reveal/Zoom"; // Importing Zoom effect

const Skills = () => {
  return (
    <div className="skills">
      {/* <div className="skills-title">Skills</div> */}
      <div className="skills-image-container">
        <Zoom>
          <div className="skills-icons-container">
            <RiHtml5Line className="skills-icons html" />
            <TiCss3 className="skills-icons css" />
            <FaReact className="skills-icons react" />
            <SiRedux className="skills-icons redux" />
            <FaGitAlt className="skills-icons git" />
            <IoLogoJavascript className="skills-icons javascript" />
            <FaSass className="skills-icons sass" />
            <SiAdobephotoshop className="skills-icons photoshop" />
            <BsBootstrap className="skills-icons bootstrap" />
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Skills;

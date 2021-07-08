import React from "react";
//STYLES
import "./header.styles.scss";
//ICONS
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="icons-container">
        <a
          href="https://twitter.com/Anthony99_s"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineTwitter className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/anthony-lorenzo-5364a6202/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;

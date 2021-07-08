import React from "react";
//STYLES
import "./footer.styles.scss";
//ICONS
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-title">Let’s chat !</div>
      <div className="footer-text">My prefered way of contact is:</div>
      <a href="https://telegram.me/An99th" rel="noreferrer" target="_blank">
        <FaTelegramPlane className="telegram-icon" />
      </a>
      <div className="footer-text">
        You can also send me an email if you don’t use Telegram :)
      </div>
      <a href="mailto: anth.coding@gmail.com" rel="noreferrer" target="_blank">
        <MdEmail className="email-icon" />
      </a>
    </div>
  );
};

export default Footer;

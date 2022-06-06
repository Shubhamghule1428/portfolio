import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/ME.png";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Shubham Ghule</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="shubham's image"></img>
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

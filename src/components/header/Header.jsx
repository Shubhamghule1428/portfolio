import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/ME.png";
import HeaderSocial from "./HeaderSocials";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <header>
      <div className="container header_container">
        <h5 data-aos="fade-in">Hello I'm</h5>
        <h1 data-aos="fade-in">Shubham Ghule</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div data-aos="fade-down" className="me">
          <img data-aos="fade-up" src={ME} alt="shubham's image"></img>
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

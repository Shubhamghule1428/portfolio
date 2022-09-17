import React from "react";
import "./header.css";
import CV from "../../assets/CV.pdf";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const CTA = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="cta">
      <a data-aos="fade-in" href={CV} download className="btn">
        Download CV
      </a>
      <a data-aos="fade-out" href="#contact" className="btn btn-primary">
        Talk eith me
      </a>
    </div>
  );
};

export default CTA;

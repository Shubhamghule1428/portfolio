import React from "react";
import "./footer.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <footer>
      <a data-aos="zoom-out" href="#" className="footer_logo">
        Shubham Ghule
      </a>
      <ul className="permalinks">
        <li>
          <a data-aos="fade-in" href="#">
            Home
          </a>
        </li>
        <li>
          <a data-aos="fade-in" href="#about">
            About
          </a>
        </li>
        <li>
          <a data-aos="fade-in" href="#experince">
            Experince
          </a>
        </li>
        <li>
          <a data-aos="fade-in" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a data-aos="fade-in" href="#contact">
            Contact
          </a>
        </li>
      </ul>

      <div data-aos="zoom-in" className="footer_socials">
        <a href="https://www.facebook.com/shubham.ghule.vip" target={1}>
          <AiOutlineFacebook />
        </a>
        <a
          data-aos="zoom-in"
          href="https://twitter.com/shivamsg1428"
          target={1}
        >
          <AiFillTwitterSquare />
        </a>
        <a
          data-aos="zoom-in"
          href="https://www.instagram.com/mr_shivam_ghule/"
          target={1}
        >
          <AiOutlineInstagram />
        </a>
      </div>
      <div data-aos="fade-in" className="footer_copyright">
        <small>&copy; Shubham Ghule: All copyrights are reserved</small>
      </div>
    </footer>
  );
};

export default Footer;

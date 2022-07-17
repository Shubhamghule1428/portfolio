import React from "react";
import "./footer.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Shubham Ghule
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experince">Experince</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/shubham.ghule.vip" target={1}>
          <AiOutlineFacebook />
        </a>
        <a href="https://twitter.com/shivamsg1428" target={1}>
          <AiFillTwitterSquare />
        </a>
        <a href="https://www.instagram.com/mr_shivam_ghule/" target={1}>
          <AiOutlineInstagram />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Shubham Ghule: All copyrights are reserved</small>
      </div>
    </footer>
  );
};

export default Footer;

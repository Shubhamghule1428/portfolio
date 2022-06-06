import React from "react";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaGithubAlt } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/shubham-ghule-405629190/"
        target="_blank"
      >
        <RiLinkedinBoxLine />
      </a>
      <a href="https://github.com/Shubhamghule1428" target="_blank">
        <FaGithubAlt />
      </a>
      <a href="https://www.instagram.com/mr_shivam_ghule/" target="_blank">
        <FaInstagramSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;

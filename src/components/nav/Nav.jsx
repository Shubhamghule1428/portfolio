import React from "react";
import "./nav.css";
import { GoHome } from "react-icons/go";
import { ImUser } from "react-icons/im";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiBookshelf } from "react-icons/gi";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <GoHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <ImUser />
      </a>
      <a
        href="#experince"
        onClick={() => setActiveNav("#experince")}
        className={activeNav === "#experince" ? "active" : ""}
      >
        <GiBookshelf />
      </a>
      <a
        href="#project"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;

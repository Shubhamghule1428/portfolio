import React from "react";
import "./about.css";
import MEABOUT from "../../assets/me-about.png"
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {MdCastForEducation} from 'react-icons/md'
import {MdHomeRepairService} from 'react-icons/md'

const about = () => {
  return (
    <section id="about">
      <h5>Wann Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={MEABOUT} alt="ShubhamGhule" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <AiOutlineFundProjectionScreen className="about_icon"/>
              <h5>Prpject</h5>
              <small>2 projects</small>
            </article>
            <article className="about_card">
              <MdCastForEducation className="about_icon"/>
              <h5>Education</h5>
              <small>Last year in Computer Engineering</small>
            </article>
            <article className="about_card">
              <MdHomeRepairService className="about_icon"/>
              <h5>Services</h5>
              <small>2 peojects</small>
            </article>
          </div>
          <p>
            Fresh web developer with fully focused and ready learn new thing .Able to effectively
self-manage during independent projects, as well as collaborate in a team setting. Bringing
some expertise in design, installation, testing and maintenance of web systems.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default about;

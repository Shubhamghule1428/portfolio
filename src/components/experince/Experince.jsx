import React from "react";
import "./experince.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experince = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="experince">
      <h5 data-aos="fade-up">What Skill I have</h5>
      <h2 data-aos="fade-up">My Experince</h2>

      <div className="container experince_container">
        <div data-aos="fade-up" className="experince_frontend">
          <h3 data-aos="fade-up">Frontend</h3>
          <div className="experince_content">
            <article data-aos="fade-up" className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>Html</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article data-aos="fade-up" className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>css</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article data-aos="fade-up" className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>Javascipt</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article data-aos="fade-up" className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>React js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article data-aos="fade-up" className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article data-aos="fade-up" className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div data-aos="fade-up" className="experince_backend">
          <h3 data-aos="fade-up">Backend</h3>
          <div className="experince_content">
            <article data-aos="fade-up" className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>Node js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article data-aos="fade-up" className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article data-aos="fade-up" className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article data-aos="fade-up" className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article data-aos="fade-up" className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experince;

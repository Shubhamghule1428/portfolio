import React from "react";
import "./experince.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experince = () => {
  return (
    <section id="experince">
      <h5>What Skill I have</h5>
      <h2>My Experince</h2>

      <div className="container experince_container">
        <div className="experince_frontend">
          <h3>Frontend</h3>
          <div className="experince_content">
            <article className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>Html</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>css</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>Javascipt</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>React js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experince_backend">
          <h3>Backend</h3>
          <div className="experince_content">
            <article className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>Node js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className="experince_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince_details">
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

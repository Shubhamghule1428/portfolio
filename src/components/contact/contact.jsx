import React from "react";
import "./contact.css";
import { TbBrandGmail } from "react-icons/tb";

const contact = (props) => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_option">
          <article className="contact_optioni">
            <TbBrandGmail />
            <h4>Email</h4>
            <h5>wweshivamghule149@gmail.com</h5>
            <a href="mailto:wweshivamghule149@gmail.com">Send a message</a>
          </article>
          <article className="contact_optioni">
            <TbBrandGmail />
            <h4>Messanger</h4>
            <h5>wweshivamghule149@gmail.com</h5>
            <a href="mailto:wweshivamghule149@gmail.com">Send a message</a>
          </article>
          <article className="contact_optioni">
            <TbBrandGmail />
            <h4>Email</h4>
            <h5>wweshivamghule149@gmail.com</h5>
            <a href="mailto:wweshivamghule149@gmail.com">Send a message</a>
          </article>
        </div>
        {/* End of contact option */}
      </div>
    </section>
  );
};

export default contact;

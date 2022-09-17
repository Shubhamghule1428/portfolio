import React from "react";
import "./contact.css";
import { TbBrandGmail } from "react-icons/tb";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const contact = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_u4hwe28",
      "template_7c9vf59",
      form.current,
      "y6bbqSdAM58O7Snoi"
    );
    e.target.reset(); //***for empting fields kind of reload */
  };
  return (
    <section id="contact">
      <h5 data-aos="fade-up">Get in touch</h5>
      <h2 data-aos="fade-up">Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article data-aos="fade-up" className="contact_option">
            <TbBrandGmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>wweshivamghule149@</h5>
            <a href="mailto:wweshivamghule149@gmail.com" target="1">
              Send a message
            </a>
          </article>
          <article data-aos="fade-up" className="contact_option">
            <FaFacebookMessenger className="contact_option-icon" />
            <h4>Messanger</h4>
            <h5>Shubham Ghule</h5>
            <a href="https://m.me/shubham.ghule.vip" target="1">
              Send a message
            </a>
          </article>
          <article data-aos="fade-up" className="contact_option">
            <FaInstagramSquare className="contact_option-icon" />
            <h4>Instagram</h4>
            <h5>im_shivam_ghule</h5>
            <a href="https://www.instagram.com/mr_shivam_ghule/" target="1">
              Send a message
            </a>
          </article>
        </div>
        {/* End of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            data-aos="fade-up"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            data-aos="fade-up"
            type="text"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            data-aos="fade-up"
            rows="11"
            placeholder="Your message"
            required
          ></textarea>
          <button
            data-aos="fade-up"
            type="submit"
            href="#"
            className="btn btn-primary"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;

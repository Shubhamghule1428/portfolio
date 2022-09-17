import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/voiceassistant.png";
import IMG2 from "../../assets/maskface.png";
import IMG3 from "../../assets/Tic_tac_toe.png";
import IMG4 from "../../assets/foodrush.png";
import IMG5 from "../../assets/10js.png";
import IMG6 from "../../assets/portfolio.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const data = [
  {
    id: 1,
    image: IMG2,
    title: "face mask detection using Python",
    github: "https://github.com/Shubhamghule1428",
    demo: "",
  },
  {
    id: 2,
    image: IMG3,
    title: "Tic tac toe",
    github: "https://github.com/Shubhamghule1428",
    demo: "",
  },
  {
    id: 3,
    image: IMG1,
    title: "voice assistance",
    github: "https://github.com/Shubhamghule1428",
    demo: "",
  },
  {
    id: 4,
    image: IMG4,
    title: "foodrush",
    github: "https://github.com/Shubhamghule1428",
    demo: "",
  },
  {
    id: 5,
    image: IMG5,
    title: "10 JavaScipt Project",
    github: "https://github.com/Shubhamghule1428/10_js_project",
    demo: "",
  },
  {
    id: 6,
    image: IMG6,
    title: "Portfolio",
    github: "https://github.com/Shubhamghule1428/portfolio",
    demo: "",
  },
];

const portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="portfolio">
      <h5 data-aos="fade-up">My Recent Work</h5>
      <h2 data-aos="fade-up">Portfolio</h2>

      <div data-aos="fade-up" className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article data-aos="fade-up" key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img data-aos="fade-up" src={image} alt="" />
              </div>
              <h3 data-aos="fade-up">{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  data-aos="fade-up"
                  href={github}
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  data-aos="fade-up"
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;

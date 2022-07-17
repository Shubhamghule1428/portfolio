import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/voiceassistant.png";
import IMG2 from "../../assets/maskface.png";
import IMG3 from "../../assets/Tic_tac_toe.png";
import IMG4 from "../../assets/foodrush.png";
import IMG5 from "../../assets/10js.png";
import IMG6 from "../../assets/portfolio.png";

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
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
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

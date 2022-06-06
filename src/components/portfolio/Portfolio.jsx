import React from "react";
import "./portfolio.css";

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img
              src="https://unsplash.com/s/photos/face-mask"
              alt="face mask"
            />
          </div>
          <a
            href="https://github.com/Shubhamghule1428"
            className="btn"
            target="_blank"
          >
            Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default portfolio;

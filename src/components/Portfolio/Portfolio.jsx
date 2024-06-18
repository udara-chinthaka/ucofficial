import React from "react";
import "./portfolio.css";
import Health from "../../assets/img1.png";
import Wallet from "../../assets/digiV.png";
import Food from "../../assets/food.png";
const data = [
  {
    id: 1,
    image: Health,
    title: "Service Diary",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/20341774-Healthcare-service-Mobile-app",
  },
  {
    id: 2,
    image: Food,
    title: "Service Diary",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/20352463-Food-delivery-Mobile-app",
  },
  {
    id: 3,
    image: Wallet,
    title: "DiGi Wallet",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/20347994-DigiWallet-Mobile-App",
  },
];

const Portfolio = () => {
  return (
    <section id="portpolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

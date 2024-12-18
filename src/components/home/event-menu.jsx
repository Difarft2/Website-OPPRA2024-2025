import React, { useEffect, useRef } from "react";
import "../../css/homeCss/menu-event.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import contoh from "../../assets/img/contohevent.png";

const Menuev = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 } // Card terlihat 30% untuk memicu animasi
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const cards = Array(3).fill({
    title: "Pembukaan Liga Ar Rahamat 2024",
    text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
    img: contoh,
  });

  return (
    <div id="event">
      <div className="mev-container">
        <div className="mev-section-title">
          <h2 className="mev-title-text">EVENTS</h2>
          <div className="mev-line-container">
            <span className="mev-line-circle"></span>
            <span className="mev-line"></span>
            <span className="mev-line-circle"></span>
          </div>
        </div>
        <div className="mev-content">
          {cards.map((card, index) => (
            <Card
              key={index}
              style={{ width: "18rem" }}
              className="card-content"
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <Card.Img variant="top" src={card.img} className="card-img" />
              <Card.Body>
                <Card.Title className="title-card">{card.title}</Card.Title>
                <Card.Text className="des-card">{card.text}</Card.Text>
                <Link to="">
                  <Button variant="dark">Read More</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
        <Link to="/event">
          <button className="readmore-btn">Read More For All Events</button>
        </Link>
      </div>
    </div>
  );
};

export default Menuev;

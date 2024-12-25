import React, { useEffect, useRef, useState } from "react";
import "../../css/homeCss/menu-event.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import imghariguru from "../../content/img/hariguru/hariguru.svg";

const Menuev = () => {
  const [visibleCards, setVisibleCards] = useState([false, false, false]); // To track visibility of cards
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[index] = true; // Mark card as visible
              return updated;
            });
          }
        });
      },
      { threshold: 0.3 } // Card becomes visible when 30% of it is in the viewport
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

  const cards = [
    {
      title: "Peringatan Hari Guru Nasional",
      text: "Pada 25 November 2024, Pondok Pesantren Ar-Rahmat mengadakan upacara Hari Guru Nasional yang diisi dengan drama kejutan, lagu, dan penandatanganan bingkai sebagai penghargaan untuk guru.",
      img: imghariguru,
      link: "/event/hariguru", 
    },
    // {
    //   title: "Pembukaan Liga Ar Rahamat 2025",
    //   text: "An exciting new season with more thrilling moments ahead.",
    //   img: contoh,
    //   link: "/event-2025", 
    // },
    // {
    //   title: "Pembukaan Liga Ar Rahamat 2026",
    //   text: "The next chapter in our sports league begins.",
    //   img: contoh,
    //   link: "/event-2026", 
    // },
  ];

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
              className={`card-content ${visibleCards[index] ? "visible" : ""}`} // Add class if visible
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <Card.Img variant="top" src={card.img} className="card-img" />
              <Card.Body>
                <Card.Title className="title-card">{card.title}</Card.Title>
                <Card.Text className="des-card">{card.text}</Card.Text>
                <Link to={card.link}>
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

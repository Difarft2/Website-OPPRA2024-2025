import React, { useEffect, useRef, useState } from "react";
import "../../css/homeCss/menu-event.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import img17 from "../../content/img/17/img1.jpg";
import imgmastaf from '../../content/img/mastaf/Pelaksanaan Out Bond .jpg'
import imgmufest from '../../content/img/mufest/img1.jpg'

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
      title: "Peringatan HUT RI ke 79 ",
      text: "Dalam memperingati Hari Ulang Tahun Republik Indonesia yang ke-79 Pondok Pesantren Modern Ar-Rahmat mengadakan Upacara 17 Agustus yang berlangsung dengan Khidmat dan Classmeet yang di isi dengan berbagai perlombaan.",
      img: img17,
      link: "/event/17agustus", 
    },
    {
      title: "MASTAF (Masa Taaruf) Santri ",
      text: "Mastaf adalah program pembukaan yang diadakan oleh PPM Ar-Rahmat untuk menyambut santri baru SMP maupun SMA.",
      img: imgmastaf,
      link: "/event/mastaf2024", 
    },
    {
      title: "MUFEST (Muharram Festival)",
      text: "Dalam rangka memperingati Muharram 1446 H, Organisasi Pelajar Pondok Pesantren Ar-Rahmat (OPPRA) mengadakan event spesial yang selalu ditunggu-tunggu oleh para santri setiap tahun, yang bernama “MUFEST”.",
      img: imgmufest,
      link: "/event/mufes", 
    },
    
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

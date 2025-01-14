import { Helmet } from "react-helmet";
import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Footer from "../components/globalComponents/footer";


import imghariguru from "../content/img/hariguru/hariguru.svg";
import imgmastaf from '../content/img/mastaf/Pelaksanaan Out Bond .jpg'
import imgmufest from '../content/img/mufest/img1.jpg'
import img17 from "../content/img/17/ganii.jpg";



function Event(){
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
    {
      title: "Peringatan HUT RI ke 79 ",
      text: "Dalam memperingati Hari Ulang Tahun Republik Indonesia yang ke-79 Pondok Pesantren Modern Ar-Rahmat mengadakan Upacara 17 Agustus yang berlangsung dengan Khidmat dan Classmeet yang di isi dengan berbagai perlombaan.",
      img: img17,
      link: "/event/17agustus",
    },
      ];

    return(
    <div>
        <Helmet>
            <title>Event | OPPRA 2024-2025</title>
        </Helmet>
        <div>
            <div id="event" >
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
                </div>
            </div>
            <Footer/>
        </div>
    </div>
    )
}

export default Event;
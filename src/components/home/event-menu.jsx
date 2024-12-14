import "../../css/homeCss/menu-event.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

import contoh from '../../assets/img/contohevent.png'

const Menuev = () => {
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
          {/* card 1 */}
          <Card style={{ width: "18rem" }}className="card-content">
            <Card.Img variant="top" src={contoh} className="card-img"/>
            <Card.Body className="card-content">
              <Card.Title className="title-card">Pembukana Liga Ar rahamat 2024</Card.Title>
              <Card.Text className="des-card">
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
              </Card.Text>
              <Link to=""><Button variant="dark">Read More</Button></Link>
            </Card.Body>
          </Card>
          {/* card 2 */}
          <Card style={{ width: "18rem" }}className="card-content">
            <Card.Img variant="top" src={contoh} className="card-img"/>
            <Card.Body className="card-content">
              <Card.Title className="title-card">Pembukana Liga Ar rahamat 2024</Card.Title>
              <Card.Text className="des-card">
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
              </Card.Text>
              <Link to=""><Button variant="dark">Read More</Button></Link>
            </Card.Body>
          </Card>
          {/* card 3 */}
          <Card style={{ width: "18rem" }}className="card-content">
            <Card.Img variant="top" src={contoh} className="card-img"/>
            <Card.Body className="card-content">
              <Card.Title className="title-card">Pembukana Liga Ar rahamat 2024</Card.Title>
              <Card.Text className="des-card">
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
              </Card.Text>
              <Link to=""><Button variant="dark">Read More</Button></Link>
            </Card.Body>
          </Card>
        </div>
          <Link to=""><button className="readmore-btn" >Read More For All Events</button></Link>
      </div>
    </div>
  );
};

export default Menuev;

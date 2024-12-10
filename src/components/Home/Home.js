import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import profile from "../../Assets/profile.jpg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{""}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> MD Shahab Uddin</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <img
  src={profile}
  alt="profile pic"
  className="img-fluid rounded-lg grayscale filter shadow-lg shadow-purple-500"
  style={{
    maxHeight: "450px",
    filter: "brightness(1.1) sepia(0.2) hue-rotate(-50deg) saturate(1.5)",
  }}
/>

            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

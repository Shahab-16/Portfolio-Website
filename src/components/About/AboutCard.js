import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone, I am <span className="purple">   MD Shahab Uddin   </span>
            <span>  from  </span><span className="purple"> Rourkela, India.</span>
            <br />
            I am currently a third-year undergraduate student pursuing a Bachelor's degree at NIT Rourkela.
            <br />
            <br />
            Beyond programming, here are a few activities I genuinely enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Engaging in Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Sports such as Cricket, Badminton, and Carrom
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new places and Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Aspire to create impactful and meaningful solutions!"{" "}
          </p>
          <footer className="blockquote-footer">MD Shahab Uddin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate developer who loves turning ideas into reality through code.
              <br />
              <br />
              I’m skilled in
              <i>
                <b className="purple"> C++, JavaScript, and Python, </b>
              </i>
              and have built projects ranging from scalable web apps to AI-driven solutions.
              <br />
              <br />
              My interests revolve around
              <i>
                <b className="purple">
                  {" "}
                  Full-Stack Development, Machine Learning, and Problem Solving
                </b>
              </i>
              — blending logic with creativity to craft impactful solutions.
              <br />
              <br />
              I have solved <b className="purple">800+ DSA problems</b> across platforms like{" "}
              <b className="purple">LeetCode, GeeksforGeeks,</b> and{" "}
              <b className="purple">CodeChef</b>, achieving a{" "}
              <b className="purple">global rank of 261</b> in Starters 198.
              <br />
              <br />
              As a <b className="purple">Software Engineering Intern at Vizora Enterprises</b>, I
              worked on building microservice-based architectures using{" "}
              <b className="purple">Node.js, Express, RabbitMQ,</b> and{" "}
              <b className="purple">Cloudinary</b>, improving performance and scalability.
              <br />
              <br />
              I also enjoy creating dynamic user interfaces with{" "}
              <b className="purple">React.js</b> and{" "}
              <b className="purple">Tailwind CSS</b> — always aiming for clean,
              intuitive, and responsive design.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Let’s <span className="purple">connect</span> and collaborate!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Shahab-16"
                  target="_blank"
                  className="icon-colour home-social-icons"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/md-shahab-uddin-500405268/"
                  target="_blank"
                  className="icon-colour home-social-icons"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/sha_ud16"
                  target="_blank"
                  className="icon-colour home-social-icons"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.hackerrank.com/mdshahabuddin0516"
                  target="_blank"
                  className="icon-colour home-social-icons"
                  rel="noreferrer"
                >
                  <SiHackerrank />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/MD_SHAHAB/"
                  target="_blank"
                  className="icon-colour home-social-icons"
                  rel="noreferrer"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

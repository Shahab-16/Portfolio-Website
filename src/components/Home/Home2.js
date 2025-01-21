import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
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
              Programming has been a passion of mine, and over time, I have honed my skills in 
              <i>
                <b className="purple"> C++, Python, and Javascript.</b>
              </i>
              <br />
              <br />
              My primary areas of interest are in developing innovative solutions in 
              <i>
                <b className="purple"> Web Development, Data Structures and Algorithms (DSA)</b>, and exploring 
                <b className="purple"> data-oriented fields like Data Science, Machine Learning,</b> and
                <b className="purple"> Image Processing.</b>
              </i>
              <br />
              <br />
              I also enjoy building impactful projects with <b className="purple">Node.js</b> and working with modern frameworks such as
              <i>
                <b className="purple"> React.js</b> to create intuitive web applications.
              </i>
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
              I’d love to <span className="purple">connect</span> with you!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mdshahab"
                  target="blank"
                  className="icon-colour home-social-icons"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/md-shahab-uddin-500405268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="blank"
                  className="icon-colour home-social-icons"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/sha_ud16"
                  target="blank"
                  className="icon-colour home-social-icons"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.hackerrank.com/mdshahabuddin0516"
                  target="blank"
                  className="icon-colour home-social-icons"
                  rel="noreferrer"
                >
                  <SiHackerrank />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.leetcode.com/md_shahab"
                  target="blank"
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

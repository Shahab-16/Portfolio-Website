import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import yumzy from "../../Assets/Projects/yumzy.png";
import encryptix from "../../Assets/Projects/encryptix.png";
import medisense from "../../Assets/Projects/medisense.png";
import spamClassifier from "../../Assets/Projects/spamClassifier.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yumzy}
              isBlog={false}
              title="Yumzy"
              description="A food delivery website for foodies, built using React.js, Node.js, Express, and MongoDB. Features include add-to-cart functionality, user login and registration with JWT authentication, and an order tracking system. The platform also has an admin section for managing food items and overseeing orders."
              ghLink="https://github.com/Shahab-16/Yumzy"
              demoLink="https://yumzy-frontend-cmii.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medisense}
              isBlog={false}
              title="MediSense"
              description="Medisense is a full-stack healthcare platform developed using ReactJS, NodeJS, MongoDB, ExpressJS, Scikit-learn, and TensorFlow. It offers features like one-to-one video consultations with doctors and online medicine shopping with home delivery. The platform integrates high-accuracy ML and DL models for disease prediction. It aims to enhance accessibility and efficiency in healthcare services."
              ghLink="https://github.com/Shahab-16/MediSense"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={encryptix}
              isBlog={false}
              title="Encryptrix Intern Project"
              description="Interned at Encryptrix, where I developed machine learning models and conducted extensive data cleaning, exploratory data analysis (EDA), and data visualization to uncover insights. Built interactive visualizations to enhance data understanding and model performance. Integrated the models into a web application using Flask for seamless functionality."
              ghLink="https://github.com/Shahab-16/Encryptix_Intern_Projects/tree/master"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spamClassifier}
              isBlog={false}
              title="Spam Classifier"
              description="A Machine Learning model that can detect spam emails. I used NLP to create this model. The model can detect spam messages with high accuracy."
              ghLink="https://github.com/Shahab-16/Fake_News_Detection/tree/my-new-branch"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

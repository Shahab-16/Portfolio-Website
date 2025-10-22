import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// 🖼️ Project Images
import yumzy from "../../Assets/Projects/yumzy.png";
import encryptix from "../../Assets/Projects/encryptix.png";
import medisense from "../../Assets/Projects/medisense.png";
import spamClassifier from "../../Assets/Projects/spamClassifier.png";
import vizora from "../../Assets/Projects/vizora.png";
import only4u from "../../Assets/Projects/only4u.png";
import sensor from "../../Assets/Projects/sensor.jpg"; 

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the major projects that showcase my development and machine learning experience.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 🍴 Yumzy */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yumzy}
              isBlog={false}
              title="Yumzy"
              description="A full-stack food delivery platform built with React.js, Node.js, Express, and MongoDB. Includes secure JWT authentication, order tracking, and an admin dashboard for food and user management. Integrated Stripe for payment processing."
              ghLink="https://github.com/Shahab-16/Yumzy"
              demoLink="https://yumzy-frontend-cmii.onrender.com/"
            />
          </Col>

          {/* 🏥 MediSense */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medisense}
              isBlog={false}
              title="MediSense"
              description="A MERN + ML powered healthcare platform enabling real-time doctor consultations, pharmacy orders, and patient management. Integrated Scikit-learn models for disease prediction and real-time chat via Socket.io."
              ghLink="https://github.com/Shahab-16/MediSense"
              demoLink="https://medisense-frontend.vercel.app/"
            />
          </Col>

          {/* 🧠 Vizora Enterprises */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vizora}
              isBlog={false}
              title="Vizora Enterprises"
              description="A scalable microservices-based e-commerce system built during my Software Engineering Internship at Vizora. Designed RESTful APIs using Node.js, Express, MongoDB, and RabbitMQ with JWT-based authentication and role-based access control."
              ghLink="https://github.com/Shahab-16/Vizora-Enterprises"
              demoLink="https://vizora-enterprises.vercel.app/"
            />
          </Col>

          {/* 💼 Only4U Training */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={only4u}
              isBlog={false}
              title="Only4U Training"
              description="An educational and training website built with React.js and Tailwind CSS. Features interactive pages including Home, Courses, Testimonials, and FAQ. Emphasizes responsive UI, reusability, and modern component structure."
              ghLink="https://github.com/Shahab-16/Only4U-Training"
              demoLink="https://only-4u-training.vercel.app/"
            />
          </Col>

          {/* ⚙️ Sensor Fault Detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sensor}
              isBlog={false}
              title="Sensor Fault Detection"
              description="A Machine Learning project designed to identify sensor malfunctions using predictive modeling. Implemented modular pipelines for data ingestion, transformation, and model training using Python, Scikit-learn, and Flask for deployment."
              ghLink="https://github.com/Shahab-16/Sensor-Fault-Detection"
            />
          </Col>

          {/* 🤖 Encryptyx Internship */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={encryptix}
              isBlog={false}
              title="Encryptyx Internship Project"
              description="Developed and optimized machine learning models during my Data Science & ML internship at Encryptyx. Conducted data cleaning, EDA, visualization, and integrated models into a Flask-based frontend for live inference."
              ghLink="https://github.com/Shahab-16/Encryptix_Intern_Projects/tree/master"
            />
          </Col>

          {/* 📧 Spam Classifier */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spamClassifier}
              isBlog={false}
              title="Spam Classifier"
              description="A text classification model using NLP to identify spam messages with high precision. Built with Python, Scikit-learn, and NLTK for preprocessing and trained with TF-IDF vectorization."
              ghLink="https://github.com/Shahab-16/Fake_News_Detection/tree/my-new-branch"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

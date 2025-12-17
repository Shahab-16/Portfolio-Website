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
import hrinsight from "../../Assets/Projects/hrinsight.png"; // ⬅️ add image

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
              description="A full-stack food delivery platform built with React.js, Node.js, Express, and MongoDB. Includes secure JWT authentication, order tracking, admin dashboard, and Stripe-based payment integration."
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
              description="A MERN + ML powered healthcare platform enabling real-time doctor consultations, pharmacy orders, and disease prediction using Scikit-learn with real-time chat via Socket.io."
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
              description="A scalable microservices-based e-commerce system built during my Software Engineering Internship. Designed REST APIs using Node.js, Express, MongoDB, RabbitMQ with JWT authentication and RBAC."
              ghLink="https://github.com/Shahab-16/Vizora-Enterprises"
              demoLink="https://vizora-enterprises.vercel.app/"
            />
          </Col>

          {/* 📊 HRInsight Pro */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hrinsight}
              isBlog={false}
              title="HRInsight Pro"
              description="An AI-powered HR diagnostic testing platform that evaluates organizational maturity through MCQ-based assessments. Generates automated insights, maturity scores, radar chart data, and strategic HR recommendations using GPT API."
              ghLink="https://github.com/Shahab-16/HRINSIGHT-PRO/"
              demoLink="https://hrinsight-pro.vercel.app/"
            />
          </Col>

          {/* 💼 Only4U Training */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={only4u}
              isBlog={false}
              title="Only4U Training"
              description="An educational and training website built with React.js and Tailwind CSS. Includes Courses, Testimonials, FAQs, and a fully responsive, reusable component-based UI."
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
              description="A machine learning system to detect sensor failures using predictive modeling. Built modular ML pipelines for data ingestion, transformation, training, and deployed using Flask."
              ghLink="https://github.com/Shahab-16/Sensor-Fault-Detection"
            />
          </Col>

          {/* 🤖 Encryptyx Internship */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={encryptix}
              isBlog={false}
              title="Encryptyx Internship Project"
              description="Worked on end-to-end ML workflows including data cleaning, EDA, visualization, model training, and Flask-based deployment during my Data Science & ML internship."
              ghLink="https://github.com/Shahab-16/Encryptix_Intern_Projects/tree/master"
            />
          </Col>

          {/* 📧 Spam Classifier */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spamClassifier}
              isBlog={false}
              title="Spam Classifier"
              description="An NLP-based text classification model to detect spam messages using TF-IDF vectorization, Scikit-learn, and NLTK with high precision."
              ghLink="https://github.com/Shahab-16/Fake_News_Detection/tree/my-new-branch"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

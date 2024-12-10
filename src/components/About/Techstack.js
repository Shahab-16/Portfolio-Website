import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* HTML */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />
        </a>
      </Col>
      {/* JavaScript */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
        </a>
      </Col>
      {/* MySQL */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40" />
        </a>
      </Col>
      {/* Node.js */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://nodejs.org" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" />
        </a>
      </Col>
      {/* Pandas */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://pandas.pydata.org/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg" alt="pandas" width="40" height="40" />
        </a>
      </Col>
      {/* Python */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.python.org" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40" />
        </a>
      </Col>
      {/* React */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
        </a>
      </Col>
      {/* Scikit-learn */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://scikit-learn.org/" target="_blank" rel="noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="scikit_learn" width="40" height="40" />
        </a>
      </Col>
      {/* Seaborn */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://seaborn.pydata.org/" target="_blank" rel="noreferrer">
          <img src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" alt="seaborn" width="40" height="40" />
        </a>
      </Col>
      {/* TailwindCSS */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40" />
        </a>
      </Col>
      {/* Express.js */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/ios/50/ffffff/express-js.png" alt="express" width="40" height="40" />
        </a>
      </Col>
      {/* MongoDB */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="mongodb" width="40" height="40" />
        </a>
      </Col>
      {/* Postman */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.postman.com/" target="_blank" rel="noreferrer">
          <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40" />
        </a>
      </Col>
    </Row>
  );
}

export default Techstack;

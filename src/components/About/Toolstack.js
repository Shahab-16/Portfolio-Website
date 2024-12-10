import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiJupyter, SiPowerbi, SiMicrosoftexcel, SiAnaconda } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* VSCode */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      {/* Jupyter */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      {/* Power BI */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      {/* Excel */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
      </Col>
      {/* Anaconda */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>
    </Row>
  );
}

export default Toolstack;

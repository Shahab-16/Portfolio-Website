import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" ,paddingTop: "10px" , marginTop: "20px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code in Github</strong>
      </h1>
      <GitHubCalendar
        username="Shahab-16"
        blockSize={15}
        blockMargin={5}
        color="green"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;

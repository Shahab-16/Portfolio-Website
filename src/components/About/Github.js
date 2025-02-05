import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const theme = {
    light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
    dark: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127']
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px", paddingTop: "10px", marginTop: "20px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code on GitHub</strong>
      </h1>
      <GitHubCalendar
        username="Shahab-16"
        blockSize={15}
        blockMargin={5}
        theme={theme} // Updated to use theme
        fontSize={16}
      />
    </Row>
  );
}

export default Github;

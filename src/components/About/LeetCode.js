import React from "react";
import { Row } from "react-bootstrap";
import LeetCodeCalendar from "leetcode-calendar";
import "../../App.css";

function LeetCode() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        paddingTop: "10px",
        marginTop: "20px",
      }}
    >
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code on LeetCode</strong>
      </h1>
      <div className="leetcode-calendar">
        <LeetCodeCalendar
          username="MD_SHAHAB"
          blockSize={15}
          blockMargin={5}
          color="#FFA500" 
          fontSize={16}
        />
      </div>
    </Row>
  );
}

export default LeetCode;

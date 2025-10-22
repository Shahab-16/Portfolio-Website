import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
              "Full-Stack Developer",
              "Software Engineer",
              "Machine Learning Developer",
              "Backend & API Designer",
              "Problem-Solving Enthusiast (800+ DSA)",
              "Tech Innovator from NIT Rourkela",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import { FaBriefcase, FaSchool, FaUsers } from "react-icons/fa";
  import experiences from "../config/Experience";
  
  function Experience() {
    return (
      <div id="experience" className="pt-12 container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-purple-600">
          Experience
        </h2>
        {/* Create a timeline here */}
        <VerticalTimeline lineColor="#b46fd9">
          {experiences.map((e, index) => {
            const grpNum = Math.floor(index / 2);
            const Icon =
              e.type === "work"
                ? FaBriefcase
                : e.type === "commu"
                ? FaUsers
                : FaSchool;
            const alignment = index % 2 === 0 ? "left" : "right";
            const bgColor = `rgb(${20 + 30 * grpNum}, ${82 - 15 * grpNum}, 128)`;
            const iconColor = `rgb(${140 + 30 * grpNum}, ${190 - 15 * grpNum}, 255)`;
  
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: bgColor,
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${bgColor}`,
                }}
                date={e.date}
                iconStyle={{
                  background: iconColor,
                  color: "#fff",
                }}
                icon={<Icon size={24} />}
                position={alignment}
              >
                <h3 className="text-xl font-semibold">{e.heading}</h3>
                <h4 className="text-lg font-medium">{e.sub}</h4>
                <p className="text-sm">{e.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    );
  }
  
  export default Experience;
  
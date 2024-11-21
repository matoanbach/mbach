import React, { useEffect, useRef } from "react";
import Wrapper from "../assets/wrappers/Resume";
import seneca_logo from "../assets/images/seneca_logo.png";
import carobot_logo from "../assets/images/carobot_logo.jpeg";
import sess_logo from "../assets/images/sess_logo.png";
import { ResumeSection } from "./";
const educations = [
  {
    logo: seneca_logo,
    title: "Seneca Polytechnic",
    description: "Bachelor of Engineering in Software Engineering | 2022",
  },
];
const experiences = [
  {
    logo: carobot_logo,
    title: "Canada Robotix",
    description: "Engineering Trainee | 2024",
  },
];

const volunteers = [
  {
    logo: sess_logo,
    title: "Seneca Engineering Student Society",
    description: "Vice President Academic | 2023",
  },
];

function Resume() {
  const scrollerRefs = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      console.log("true");
      addAnimation();
    }

    function addAnimation() {
      scrollerRefs.current.forEach((scroller) => {
        if (scroller) {
          scroller.setAttribute("data-animated", true);
        }
      });
    }
  }, []);

  return (
    <Wrapper>
      <div className="content-container">
        <h2>Education</h2>
        {educations.map((education) => {
          return (
            <ResumeSection
              logo={education.logo}
              title={education.title}
              description={education.description}
            />
          );
        })}
        <h2>Experience</h2>
        {experiences.map((experience) => {
          return (
            <ResumeSection
              logo={experience.logo}
              title={experience.title}
              description={experience.description}
            />
          );
        })}
        <h2>Volunteer</h2>
        {volunteers.map((volunteer) => {
          return (
            <ResumeSection
              logo={volunteer.logo}
              title={volunteer.title}
              description={volunteer.description}
            />
          );
        })}
        <h2>Skills</h2>
        <div className="scroller-container">
          <div
            className="scroller"
            ref={(el) => (scrollerRefs.current[0] = el)}
          >
            <ul className="tag-list scroller__inner">
              <li>C/C++</li>
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              {/* <li>C/C++</li>
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li> */}
            </ul>
          </div>
        </div>

        <h2>Frameworks</h2>
        <div className="scroller-container">
          <div
            className="scroller"
            ref={(el) => (scrollerRefs.current[1] = el)}
          >
            <ul className="tag-list scroller__inner">
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Auth0</li>
              {/* <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Auth0</li> */}
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Resume;

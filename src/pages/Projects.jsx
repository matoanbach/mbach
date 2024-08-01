import React, { useEffect, useRef } from "react";
import Wrapper from "../assets/wrappers/Resume";
import jobify_logo from "../assets/images/jobify_logo.png";
import comfy_sloth_logo from "../assets/images/comfy_sloth_logo.png";
import quacky_logo from "../assets/images/quacky_logo.png"
import quack from "../assets/images/quack.jpeg"
import esp32_logo from "../assets/images/esp32_logo.png";

import { Project } from "./";

const projects = [
  {
    logo: esp32_logo,
    title: "ESP32 Starter Kit",
    link: "https://www.canadarobotix.com/products/5200",
    description: [
      "Wrote and published detailed instructions and manual guides for 6+ electronic projects using ESP32, IMU Sensor, HX711 and TFT SPI LCD modules, incorporating code explanations and documentation for future reference",
      "Developed firmware in C++ to collect data sensor and established UDP communication between two ESP32 and computers via a WiFi network",
      "Optimized and debugged firmware using Arduino IDE, Wireshark, tcpdump and Ubuntu 22.04, resulting in efficient memory usage and real-time performance",
      "Generated 300 CAD in revenue by successfully selling four ESP32 Starter Kits",
    ],
  },
  {
    logo: quack,
    title: "Vex Quacky",
    link: "https://github.com/kliuengineering/Vex24Q2_v4/",
    description: [
      "Led a team of 5 to engineer gesture-controlled robots using web development, computer vision, networking and embedded system, contributing to National Engineering Month 2024",
      "Assembled the robot components and hardware modules including ESP8266 and ARM CORTEX Microcontroller",
      "Programmed and debugged the robots and its components run on C/C++ using ROBOTC and Ubuntu 22.04",
      "Reduced server and robot communication latency from 55 ms to 30 ms by using UDP protocol",
      "Documented educational content and tutorials in GitHub, assisting colleagues interested in robotics and AI",
    ],
  },
  {
    logo: jobify_logo,
    title: "Jobify",
    link: "https://jobify-me-r6g3.onrender.com/",
    description: [
      "Developed a full-stack web app enabling users to create, add, and edit job applications to track their job search",
      "Applied MERN stack framework following a model-view-controller (MVC) architecture",
      "Utilized JWT for authentication and authorization and built a REST API to route get, post, put and delete actions",
      "Developed a friendly UI using React with account management, authentication and job statistic",
    ],
  },
  {
    logo: comfy_sloth_logo,
    title: "Comfy Sloth",
    link: "https://comfy-sloth-me.netlify.app/",
    description: [
      "Developed an e-commerce app for furniture shopping, allowing users to search for furniture based on categories",
      "Implemented a search algorithm and utilized Axios library to fetch furniture data from a REST API",
      "Integrated AuthO API for secure user authentication and Stripe API for seamless payment processing",
      "Designed and developed the front-end using React, HTML, and CSS",
    ],
  },
];

function Projects() {
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
        {projects.map((project) => {
          return (
            <Project
              logo={project.logo}
              link={project.link}
              title={project.title}
              description={project.description}
            />
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Projects;

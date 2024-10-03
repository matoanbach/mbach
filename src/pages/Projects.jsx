import React, { useEffect, useRef } from "react";
import Wrapper from "../assets/wrappers/Resume";
import jobify_logo from "../assets/images/jobify_logo.png";
import comfy_sloth_logo from "../assets/images/comfy_sloth_logo.png";
import quacky_logo from "../assets/images/quacky_logo.png";
import quack from "../assets/images/quack.jpeg";
import esp32_logo from "../assets/images/esp32_logo.png";
import http_logo from "../assets/images/http_logo.png";
import shell_logo from "../assets/images/shell_logo.png";
import dns_logo from "../assets/images/dns_logo.png";
import line_follower_logo from "../assets/images/line_follower.jpeg";
import _3dswim_logo from "../assets/images/3dswim_logo.jpeg";
import sess_logo from "../assets/images/sess_logo.png";

import { Project } from "./";

const projects = [
  {
    logo: _3dswim_logo,
    title: "3D S.W.I.M",
    link: "https://github.com/matoanbach/3d-swim",
    description: [
      "Engineered a system to visualize invisible waves in 3D by using a Delta 3D printer, MainsailOS, Klipper, Raspberry Pi 3 and Arduino Uno R3",
      "Developed an Arduino program to collect and process real-time ultrasonic data as analog values, converting to digital values for further analysis",
      "Visualized the ultrasonic waves in real-time using Matplotlib and NumPy to generate a dynamic polar plots",
    ],
  },
  {
    logo: line_follower_logo,
    title: "VEX Line Follower",
    link: "https://github.com/matoanbach/vex-line-follower",
    description: [
      "Designed and developed a line-following robot utilizing the VEX Cortex M4 microcontroller, C, and ROBOTC",
      "Implemented and turned a PID (Proportional-Integral-Derivative) controller algorithm to enhance the precision of robot’s movements",
    ],
  },
  {
    logo: dns_logo,
    title: "DNS Server",
    link: "https://github.com/matoanbach/http-server",
    description: [
      "Developed a DNS server in C++ capable of parsing and responding to basic queries, simulating real-world DNS mechanisms on a Unix-based system, using Unix, dig command-line and Visual Studio Code to debug",
      "Engineered a custom packet parsing algorithm to efficiently decode and extract DNS query fields from UDP packets, achieving seamless handling of DNS protocols according to RFC 1035",
      "Integrated advanced DNS features such as domain name compression to reduce packet size, enhancing server efficiency and compliance with DNS standards",
    ],
  },
  {
    logo: http_logo,
    title: "HTTP Server",
    link: "https://github.com/matoanbach/http-server",
    description: [
      "Designed and implemented a HTTP server using C++ and CMake, handling GET/POST requests, serving static files and gzip compressed files, and managing multiple concurrent connections",
      "Extracted URL paths and implemented routing logic to serve different resources, improving server response accuracy by 95%",
      "Applied multithreading to optimize server performance to handle concurrent connections efficiently, improving response times under load by 50",
    ],
  },
  {
    logo: shell_logo,
    title: "Shell",
    link: "https://github.com/matoanbach/shell",
    description: [
      "Implemented a Unix-like shell with full support for Read-Eval-Print Loop (REPL) to handle user input, command execution, and output display",
      "Developed essential built-in shell commands such as exit, echo, type, pwd, and cd, ensuring correct interpretation and execution of user commands",
    ],
  },
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
    logo: sess_logo,
    title: "SESS website",
    link: "https://www.senecaengsoc.ca/home",
    description: [
      "Collaborated with a team of 4 executive members to implement a web page for our engineering club",
      "Built a friendly UI for the event and contact pages for the website",
      "Implemented routes using React Router v6.4 for smooth navigation",
      "Design and developed the web pages using React, HTML, CSS, and Figma",
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

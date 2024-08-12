import React from "react";
import Wrapper from "../assets/wrappers/Home";
import img from "../assets/images/hero-background.jpeg";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Home() {
  return (
    <Wrapper>
      <div className="hero-container">
        <img src={img} alt="" />
        <div className="type-animation">
          <span>Hello 👋, I'm </span>
          <ReactTyped
            strings={[
              "awake coding",
              "an engineering student",
              "a football lover",
              "happy to connect",
            ]}
            typeSpeed={80}
            backSpeed={80}
            loop
          />
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="main-content">
            <h2>Hi there!</h2>
            <p>
              My name is Ma Toan Bach. I am an engineering student at Seneca
              Polytechnic. I am passionate about Web Development, Software
              Engineering, Microservices and Embedded System.
            </p>
            <p>Currently, I am:</p>
            <ul>
              <li>
                Enrolled in Bachelor of Engineering in Software Engineering
              </li>
              <li>Developing skills in C/C++ and Go</li>
              <li>
                Looking for interesting and impactful work in Software
                Engineering and Embedded System
              </li>
            </ul>
          </div>
          <div className="contact-content">
            <h2>Contact Links</h2>
            <div className="icon-container1">
              <a href="https://www.linkedin.com/in/ma-toan-bach-59b090265/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/matoanbach">
                <FaGithubSquare />
              </a>
              <a href="https://www.instagram.com/_mbach/">
                <FaInstagram />
              </a>
            </div>
            <div className="icon-container2">
              <IoMdMail />
              <p>me@[firstname][lastname].com</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Home;

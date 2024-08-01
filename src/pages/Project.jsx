import React from "react";
import Wrapper from "../assets/wrappers/Project";
import { RiExternalLinkLine } from "react-icons/ri";

function Project({ logo, link, title, description }) {
  return (
    <Wrapper>
      <div className="sub-content">
        <div className="img">
          <img src={logo} alt="logo" />
        </div>
        <div className="description">
          <div className="title">
            <h3>{title} </h3>
            <a href={link}>
              <RiExternalLinkLine />
            </a>
          </div>
          <ul>
            {description.map((des) => {
              return <li>{des}</li>;
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

export default Project;

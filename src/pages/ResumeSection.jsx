import React from "react";
import Wrapper from "../assets/wrappers/ResumeSection";

function ResumeSection({ logo, title, description }) {
  return (
    <Wrapper>
        <div className="sub-content">
          <div className="img">
            <img src={logo} alt="logo" />
          </div>
          <div className="description">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
    </Wrapper>
  );
}

export default ResumeSection;

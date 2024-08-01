import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/NavBar";
import { FaAlignLeft } from "react-icons/fa";
const nav_sections = ["Home", "Resume", "Projects"];
function NavBar() {
  const [isShowBar, setIsShowBar] = useState(false);
  return (
    <Wrapper>
      <div
        className={
          isShowBar ? "nav-bar-container show-bar" : "nav-bar-container"
        }
      >
        <ul>
          {nav_sections.map((name, index) => {
            return (
              <li>
                <Link
                  to={name.toLowerCase()}
                  onClick={() => setIsShowBar(!isShowBar)}
                >
                  {" "}
                  0{index + 1} {"->"} {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <button className="toggle-btn" onClick={() => setIsShowBar(!isShowBar)}>
        <FaAlignLeft />
      </button>
    </Wrapper>
  );
}

export default NavBar;

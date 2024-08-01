import styled from "styled-components";

const Wrapper = styled.nav`
  background-color: white;
  position: fixed;
  width: 100vw;
  top: -2px;
  display: flex;
  justify-content: center;
  li {
    display: inline;
    margin-right: 23px;
  }
  a {
    color: #666;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
  }
  ul {
    padding: 0;
  }
  a:hover {
    font-weight: 600;
  }
  .nav-bar-container {
    display: flex;
    justify-content: start;
    background-color: white;
    width: 1090px;
    margin: 10px;
  }
  .toggle-btn {
    display: none;
  }
  @media (max-width: 1200px) {
    .nav-bar-container {
      width: 700px;
    }
  }
  @media (max-width: 900px) {
    .nav-bar-container {
      width: 600px;
    }
    li {
      display: flex;
      flex-direction: column;
    }
    .toggle-btn {
      background: transparent;
      border-color: transparent;
      font-size: 1.75rem;
      color: var(--primary-500);
      cursor: pointer;

      margin-bottom: 30px;
      display: flex;
      width: 50px;
      height: 50px;
      margin-top: 20px;
    }
    .nav-bar-container {
      justify-content: space-around;
      margin-top: -100px;
      transition: margin-top 0.3s ease-in-out;
    }
    .show-bar {
      margin-top: 20px;
    }
  }
  @media (max-width: 750px){
    .nav-bar-container {
      width: 450px;
    }
  }
  @media (max-width: 600px){
    .nav-bar-container {
      width: 350px;
    }
  }
`;

export default Wrapper;

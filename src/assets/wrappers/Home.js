import styled from "styled-components";

const Wrapper = styled.div`
  .hero-container {
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }
  .hero-container img {
    width: 100%;
  }
  .type-animation {
    position: absolute;
    text-align: center;
    top: 40%;
    left: 20%;
    color: white;
    font-size: 50px;
    font-weight: 900;
  }
  .content-container {
    display: flex;
    justify-content: center;
  }
  .content {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 40px;
  }
  .main-content {
    width: 700px;
  }
  .content-container h2 {
    font-size: 30px;
    font-weight: 400;
    margin: 10px;
    margin-left: 0px;
  }
  .contact-content {
    width: 350px;
  }
  a {
    text-decoration: none;
    color: #666;
  }
  svg {
    margin-right: 10px;
    font-size: 20px;
  }
  svg:hover {
    fill: black;
  }
  .icon-container2 {
    display: flex;
    align-items: center;
  }

  @media (max-width: 1600px) {
    .type-animation {
      font-size: 45px;
      font-size: 900;
    }
  }
  @media (max-width: 1200px) {
    .type-animation {
      font-size: 35px;
      font-size: 900;
    }
    .content {
      flex-direction: column;
    }
  }
  @media (max-width: 900px) {
    h2 {
      text-align: center;
    }
    .contact-content {
      text-align: center;
    }
    .content {
      width: auto;
    }
    .type-animation {
      font-size: 20px;
      font-size: 900;
    }
    .main-content {
      width: 95vw;
    }
    .hero-container img {
      width: 100%;
    }
  }
`;

export default Wrapper;

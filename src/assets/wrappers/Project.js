import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  .sub-content {
    display: flex;
  }
  .img {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
  img {
    width: 90%;
  }
  .description {
    width: 70%;
  }
  a {
    color: #666;
    font-size: 20px;
  }
  .title {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  @media (max-width: 1250px) {
    .sub-content {
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .title {
      justify-content: center;
    }
  }
  @media (max-width: 850px) {
    .description {
      width: 50%;
    }
  }
  @media (max-width: 600px) {
    .description {
      width: 40%;
    }
  }
`;

export default Wrapper;

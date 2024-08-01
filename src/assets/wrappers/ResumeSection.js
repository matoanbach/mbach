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
    height: 100px;
  }
  @media (max-width: 1250px) {
    .sub-content {
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export default Wrapper;

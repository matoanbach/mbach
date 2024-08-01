import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  .content-container {
    width: 1090px;
  }
  h1 {
    font-weight: 400;
    padding: 0;
    font-size: 42px;
    margin-top: 50px;
  }
  h2 {
    font-weight: 400;
    padding: 0;
    font-size: 30px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @media (max-width: 1250px) {
    text-align: center;
  }

  .tag-list {
    margin: 0;
    padding-inline: 0;
    list-style: none;
  }
  .tag-list li {
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #666;
  }
  
  .tag-list li:hover {
    background-color: #666;
    color: white;
  }

  .scroller-container {
    display: flex;
    justify-content: center;
  }
  .scroller {
    max-width: 600px;
  }
  .scroller__inner {
    padding-block: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .scroller[data-animated="true"] {
    border-top: 1px solid #666;
    border-bottom: 1px solid #666;
    overflow: hidden;
    -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
    mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  }
  .scroller[data-animated="true"] .scroller__inner {
    width: max-content;
    flex-wrap: nowrap;
    animation: scroll 20s linear infinite;
  }
  .scroller[data-animated="true"] .scroller__inner:hover {
    animation-play-state: paused
  }
  @keyframes scroll {
    to {
      transform: translate(calc(-50% - 0.5rem));
    }
  }
`;

export default Wrapper;

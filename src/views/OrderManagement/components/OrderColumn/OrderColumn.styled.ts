import styled from "styled-components";
export const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 1.5rem;
    font-weight: 800;
    color: #403937;
    text-align: center;
  }

  &.request_sent h2 {
    color: #8047f8;
  }
  &.request_accepted h2 {
    color: #8b9d36;
  }
  &.request_denied h2 {
    color: #e90707;
  }
  &.request_left h2 {
    color: #dbac2c;
  }
`;

export const Single = styled.div`
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  max-width: 350px;
  border-radius: 6px 44px;
  padding: 1rem;
  margin-block: 1rem;
  background-color: #f3f2f2;

  color: #403937;

  h3 {
    font-size: 1rem;
    margin-block: 0.5rem;
  }

  p,
  li {
    font-size: 1rem;
    margin-top: 0.2rem;
  }

  li span {
    font-weight: 700;
    margin-right: 0.5rem;
  }

  ul {
    margin-bottom: 1rem;
  }

  .total__wrapper {
    margin-bottom: 1rem;
    width: 100%;
    max-width: 250px;

    p {
      font-size: 1rem;
      width: 100%;

      display: flex;
      justify-content: space-between;

      span {
        font-weight: 700;
        min-width: 70px;
        text-align: right;
      }
    }
  }

  .actions_wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    button {
      height: 2.5rem;
      border-radius: 6px;
      border: 2px solid #8047f8;
      color: #8047f8;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
  }
`;

import styled from "styled-components";
export const Column = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  
  h2 {
    font-size: 1.5rem;
    font-weight: 800;
    color: #403937;
    text-align: center;
  }

  &.request_sent {
    h2 {
    color: #8047f8;
  }
  & > div {
    background-image: 
    linear-gradient(#fff,#fff), 
    radial-gradient(circle at top left, #dbac2c , #8047f8 );
  }
}
  &.request_accepted {
    h2 {
    color: #8b9d36;
  }
  & > div {
    background-image: 
    linear-gradient(#fff,#fff), 
    radial-gradient(circle at top left, #dbac2c ,#8b9d36 );
  }
}
  &.request_denied {
    h2 {
    color: #e90707;
  }
  & > div {
    background-image: 
    linear-gradient(#fff,#fff), 
    radial-gradient(circle at top left, #dbac2c , #e90707 );
  }
}
  &.request_left {
    h2 {
    color: #dbac2c;
  }
  & > div {
    background-image: 
    linear-gradient(#fff,#fff), 
    radial-gradient(circle at top left, #dbac2c , #8047f8 );
  }
  }

  &.request_delivered {
    h2 {
    color:#293ad6;
    }
    & > div {
    background-image: 
    linear-gradient(#fff,#fff), 
    radial-gradient(circle at top left, #dbac2c , #293ad6 );
  }
  }
`;

export const Single = styled.div`
  max-width: 90%;
  border-radius: 6px 44px;
  padding: 2.5rem;
  background-color: #f3f2f2;
  color: #403937;
  min-height: 330px;

 
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 2.5rem;
  border: double 3px transparent;
  border-radius: 6px 44px;

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

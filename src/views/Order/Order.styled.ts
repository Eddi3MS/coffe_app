import styled from "styled-components";
export const Order = styled.div`
  display: flex;
  max-width: 1200px;
  margin-inline: auto;
  margin-top: 2rem;
  padding-inline: 2.5rem;
  align-items: flex-end;
  gap: 2.5rem;

  @media (max-width: 1194px) {
    flex-direction: column;
    align-items: center;
  }

  .info__wrapper {
    flex: 1;
    h1 {
      font-weight: 800;
      font-size: 2rem;
      color: #c47f17;
    }

    h2 {
      margin-top: 2rem;
      color: #403937;

      span {
        padding-left: 1rem;
      }

      &.request_sent span {
        color: #8047f8;
      }
      &.request_accepted span {
        color: #8b9d36;
      }
      &.request_denied span {
        color: #e90707;
      }
      &.request_left span {
        color: #dbac2c;
      }
    }

    & > p {
      font-size: 1.25rem;
      color: #403937;
    }
  }

  .image__wrapper {
    svg {
      max-width: 100%;
    }
  }
`;

export const Wrapper = styled.div`
  margin-top: 2.5rem;
  background-image: 
    linear-gradient(#fff,#fff), 
    radial-gradient(circle at top left, #dbac2c , #8047f8 );
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 2.5rem;
  border: double 3px transparent;
  border-radius: 6px 44px;

    .delivery__info {
      display: flex;
      align-items: center;
      color: #574f4d;
      font-size: 1rem;
      
      svg {
        margin-right: 1rem;
      }
      
      span {
        font-weight: 700;
      }
      
      &:not(:last-child) {     
        margin-bottom: 1rem;
      }
    }  
`;

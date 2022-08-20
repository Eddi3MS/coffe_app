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
  background-image: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  padding: 2px;

  border-radius: 6px 44px;
  display: grid;

  .delivery__wrapper {
    grid-area: 1/1;
    border-radius: 6px 44px;
    background: #fff;
    padding: 2.5rem;

    .delivery__info {
      margin-bottom: 1rem;
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
    }
  }
`;

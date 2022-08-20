import styled from "styled-components";

export const Card = styled.div`
  width: 256px;
  height: 310px;
  background-color: #f3f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px 36px;

  & > svg {
    position: relative;
    top: -1.2rem;
  }

  h3 {
    font-size: 1.25rem;
    color: #403937;
    margin-top: 0.5rem;
  }

  p {
    padding-inline: 1.25rem;
    color: #8d8686;
    font-size: 0.875rem;
    text-align: center;
    margin-top: 0.5rem;
  }
`;

export const Badge = styled.span`
  background-color: #f1e9c9;
  color: #c47f17;
  height: 21px;
  padding-inline: 0.7rem;
  font-size: 10px;
  border-radius: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

export const Badges = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 0.5rem;
  top: -0.5rem;
`;

export const Actions = styled.div`
  margin-top: 30px;
  width: 208px;
  height: 38px;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-inline: 1.5rem;

  span {
    flex: 1;
    color: #574f4d;
    font-weight: 500;
    span {
      font-size: 1.5rem;
      font-weight: 800;
      margin-left: 0.2rem;
    }
  }

  .quantity {
    width: 72px;
    height: 38px;
    border-radius: 6px;
    background: red;
  }
`;

export const CartButton = styled.button`
  width: 38px;
  height: 38px;
  background-color: #4b2995;
  border: 0;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  svg {
    path {
      fill: #fff;
    }
  }

  &:hover {
    background-color: #8047f8;
  }
`;

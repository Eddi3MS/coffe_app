import styled from "styled-components";

export const Input = styled.div`
  background-color: #e6e5e5;
  border-radius: 6px;
  display: flex;
  height: 100%;
  justify-content: space-between;
  overflow: hidden;
  width: 72px;

  span {
    align-items: center;
    display: flex;
    flex: 1;
    font-size: 1rem;
    justify-content: center;
  }
`;

export const QuantityButton = styled.button`
  align-items: center;
  background-color: inherit;
  border: 0;
  display: flex;
  padding-inline: 0.5rem;

  .minus:hover,
  .plus:hover {
    path {
      fill: #4b2995;
    }
  }
`;

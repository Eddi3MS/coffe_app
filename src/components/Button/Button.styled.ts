import styled from "styled-components";
export const Button = styled.button`
  width: 100%;
  height: 46px;
  background-color: #dbac2c;
  text-transform: uppercase;
  font-weight: 700;
  color: #f6f6f6;
  letter-spacing: 0.5px;
  border: 0;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #c47f17;
  }

  &.logout {
    height: 30px;
    background-color: #cccccc;

    &:hover {
      background-color: #aaa;
    }
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  input {
    border: 1px solid #e6e5e5;
    height: 42px;
    width: 100%;
    padding-inline: 0.75rem;
    background-color: #eeeded;
    border-radius: 4px;

    font-size: 0.875rem;
    color: #574f4d;

    &:active,
    &:focus {
      border: 1px solid #c47f17;
      outline: none;
    }
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  max-width: 100%;
  display: flex;

  input {
    flex: 1;
    border: 1px solid #e6e5e5;
    height: 42px;
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

  .input__error {
    position: absolute;
    bottom: -23px;
    font-size: 0.75rem;
    font-weight: 700;
    padding-block: 0.2rem;
    color: #e90707;
  }
`;

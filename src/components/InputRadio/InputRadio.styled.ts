import styled from "styled-components";
export const Radio = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  input {
    visibility: hidden;
    pointer-events: none;
    width: 0;
    height: 0;
  }

  label {
    display: inline-block;
    background-color: #e6e5e5;
    width: 178px;

    height: 51px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1rem;
    gap: 0.6rem;
    border-radius: 6px;

    cursor: pointer;

    &hover {
      background-color: #d7d5d5;
    }

    &.selected {
      box-shadow: 0 0 0 1.5px #8047f8;
      background-color: #ebe5f9;
    }

    &:focus-visible {
      outline: inset #8047f8 1.5px;
    }

    span {
      font-size: 0.75rem;
      position: relative;
      top: 1px;
      color: #574f4d;
    }

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

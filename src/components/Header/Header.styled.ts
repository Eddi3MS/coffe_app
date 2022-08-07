import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  height: 104px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  padding-inline: 1rem;

  display: flex;
  align-items: center;

  .header_container {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Location = styled.div`
  background-color: #ebe5f9;
  height: 38px;
  padding-inline: 0.5rem;
  margin-right: 12px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 14px;
    color: #4b2995;
  }
`;

export const Cart = styled.button`
  background-color: #f1e9c9;
  border: 0;
  height: 38px;
  width: 38px;
  border-radius: 6px;
`;

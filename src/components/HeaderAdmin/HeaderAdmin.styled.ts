import styled from 'styled-components';

export const User = styled.div`
  display: flex;
  height: 2rem;
  gap: 1rem;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 888;
  background-color: #fff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  border-top: 2px solid rgba(0, 0, 0, 0.1);

  padding: .5rem;

  justify-content: flex-end;

  a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
    border: 2px solid #4b2995;
    padding: 4px 8px;
    border-radius: 6px;
    display: flex;
    align-items: center;

    &:active {
      color: #4b2995;
      background-color: #ebe5f9;
    }
  }

  button {
    min-height: 2rem;
    max-width: 120px;
  }
`;
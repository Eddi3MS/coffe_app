import styled from "styled-components";

export const CartCard = styled.div`
  display: flex;
  height: 64px;
  padding-block: 1.5rem 2rem;
  border-bottom: 1px solid #e6e5e5;
  justify-content: flex-start;
  gap: 1rem;

  &:nth-of-type(1) {
    padding-block: 0 2rem;
  }

  & > svg {
    width: 64px;
    height: 64px;
  }

  .total_price {
    font-weight: 700;
    font-size: 1rem;
    color: #574f4d;
    min-width: 70px;
    text-align: right;
  }
`;

export const Title = styled.span`
  font-size: 1rem;
  color: #403937;
  margin-bottom: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;

  .actions_wrapper {
    height: 2rem;
    gap: 0.5rem;

    .remove_btn {
      height: 100%;
      border-radius: 6px;
      border: 0;
      padding-inline: 0.5rem;

      background-color: #e6e5e5;

      &:focus-visible {
        outline: inset #8047f8 1.5px;
      }

      span {
        text-transform: uppercase;
        font-size: 12px;
        color: #574f4d;
        position: relative;
        top: 1px;
        padding-left: 0.2rem;
      }
    }
  }
`;

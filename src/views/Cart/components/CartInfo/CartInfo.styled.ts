import styled from "styled-components";

export const Cart = styled.div`
  flex: 1;
  h2 {
    margin-bottom: 1rem;
    color: #403937;
    font-weight: 700;
  }

  .cart_items-wrapper {
    background-color: #f3f2f2;
    border-radius: 6px 44px;
    padding: 2.5rem;

    .cart_empty {
      font-size: 1rem;
      color: #574f4d;
      font-weight: 600;
    }
  }

  .info_wrapper {
    padding-top: 1.5rem;

    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.75rem;

      span {
        font-size: 1rem;
        color: #574f4d;
      }

      span:nth-of-type(1) {
        font-size: 0.875rem;
      }
    }

    div.info_total {
      span {
        font-size: 1.25rem;
        font-weight: 700;
        color: #403937;
      }
    }

    .confirm_btn {
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
    }
  }
`;

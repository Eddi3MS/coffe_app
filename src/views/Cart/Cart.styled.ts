import styled from "styled-components";

export const CartWrapper = styled.div`
  max-width: 1120px;
  margin-inline: auto;
  padding-inline: 1rem;
  padding-block: 2rem;

  form {
    display: flex;
    gap: 1rem;

    @media (max-width: 1080px) {
      flex-direction: column-reverse;
    }
  }
`;

export const Delivery = styled.div`
  flex: 2;

  h1 {
    margin-bottom: 1rem;
    color: #403937;
    font-weight: 700;
    font-size: 1.5rem;
  }

  .form__title {
    display: flex;
    align-items: center;

    svg {
      width: 22px;
      height: 22px;
      align-self: flex-start;
    }

    h3 {
      font-size: 1rem;
      font-weight: 400;
      color: #403937;
    }
    p {
      font-size: 0.875rem;
      color: #574f4d;
      margin-bottom: 2rem;
    }
  }

  .checkbox_wrapper {
    margin-top: 1rem;
    display: flex;
    align-items: center;

    input {
      accent-color: #8047f8;
      width: 1rem;
      height: 1rem;
      cursor: pointer;
    }

    label {
      margin-left: 0.5rem;
      color: #403937;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

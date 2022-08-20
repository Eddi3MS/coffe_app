import styled from "styled-components";
export const Delivery = styled.div`
  background: #f3f2f2;
  padding: 2.5rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border-radius: 6px 44px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .input__wrapper {
    display: flex;
    gap: 1rem;
    width: 100%;
  }

  .address_input,
  .district_input {
    & > div:nth-of-type(1) {
      flex: 2;
    }
    & > div:nth-of-type(2) {
      flex: 1.2;
    }
  }

  .district_input {
    & > div:nth-of-type(1) {
      flex: 1.2;
    }
    & > div:nth-of-type(2) {
      flex: 2;
    }
  }
`;

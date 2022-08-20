import styled from "styled-components";
export const Payment = styled.div`
  background: #f3f2f2;
  padding: 2.5rem;
  border-radius: 6px;
  border-radius: 6px 44px;

  .inputs__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    gap: 0.5rem;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  .payment__error {
    display: block;
    margin: 0.5rem;
    font-size: 0.75rem;

    font-weight: 700;

    padding-block: 0.2rem;

    color: #e90707;
  }
`;

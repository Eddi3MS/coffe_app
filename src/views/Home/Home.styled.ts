import styled from "styled-components";

export const Home = styled.main`
  max-width: 1120px;
  margin-inline: auto;
  padding-inline: 1rem;
  padding-block: 2rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  h2 {
    font-size: clamp(1.25rem, 3vw, 2rem);
    color: #403937;
  }

  input {
    height: 2rem;
    border: 2px solid #8d8686;
    color: #403937;
    border-radius: 6px;
    padding-left: 0.5rem;

    &:hover,
    &:focus {
      outline: none;
      border: 2px solid #403937;
    }
  }
`;

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  gap: 2rem;
  place-items: center;
`;

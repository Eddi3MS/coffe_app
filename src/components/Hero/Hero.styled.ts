import styled from "styled-components";

interface HeroProps {
  background: string;
}

export const Hero = styled.div<HeroProps>`
  align-items: center;
  background: url(${(props) => props.background}) no-repeat;
  background-size: cover;
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 3rem;
  justify-content: center;
  min-height: 500px;
  padding-inline: 1rem;

  & > svg {
    margin-top: 2rem;
    min-width: 300px;
  }
`;

export const Content = styled.div`
  max-width: 588px;
`;

export const Title = styled.div`
  h1 {
    color: #272221;
    font-size: clamp(1.25rem, 5vw, 3rem);
    font-weight: 800;
    line-height: 130%;
  }

  p {
    color: #403937;
    font-size: clamp(0.875rem, 3vw, 1.25rem);
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2rem;

  li {
    align-items: center;
    color: #574f4d;
    display: flex;
    min-width: calc(45%);
    svg {
      margin-right: 0.5rem;
    }
  }
`;

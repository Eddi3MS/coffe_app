import styled from "styled-components";

interface HeroProps {
  background: string;
}

export const Hero = styled.div<HeroProps>`
  min-height: 500px;
  background: url(${(props) => props.background}) no-repeat;
  background-size: cover;
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: center;

  & > svg {
    min-width: 300px;
    margin-top: 2rem;
  }
`;

export const Content = styled.div`
  max-width: 588px;
  padding-inline: 1rem;
`;

export const Title = styled.div`
  h1 {
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    color: #272221;
  }

  p {
    font-size: 20px;
    color: #403937;
  }
`;

export const List = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  li {
    min-width: calc(45%);
    display: flex;
    align-items: center;
    color: #574f4d;
    svg {
      margin-right: 0.5rem;
    }
  }
`;

import styled from "styled-components"

export const HomeSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  max-width: 124rem;
  border-bottom: 1px solid black;
  padding: 6rem 4rem 0 4rem;
  margin: 0 auto;
`
export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  max-width: 124rem;
  border-bottom: 1px solid black;
  padding: 6rem 4rem 0 4rem;
  margin: 0 auto;
  background: ${props =>
    props.pTransparent
      ? "var(--p-transparent)"
      : props.plTransparent
      ? "var(--pl-transparent)"
      : ""};

  @media ${props => props.theme.mediaQueries.tablet} {
    min-height: 60vh;
  }
`
export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SectionTitle = styled.h2`
  color: var(--white);
  font-size: 6rem;
  text-align: center;
  margin: 0;
  height: 20vh;

  @media ${props => props.theme.mediaQueries.tablet} {
    height: 10vh;
  }
`

export const Lead = styled.div`
  color: var(--white);
  text-align: ${props => (props.center ? "center" : "left")};
  p {
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 3.7rem;
    line-height: 1.75;
    letter-spacing: 1.5px;
  }

  @media ${props => props.theme.mediaQueries.largeDesktop} {
    p {
      font-size: 2rem;
    }
  }
  @media ${props => props.theme.mediaQueries.tablet} {
    text-align: center;
    p {
      font-size: 1.4rem;
      margin: 1rem 0;
    }
  }
`

import styled from "styled-components"

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.center ? "center" : "normal")};
  flex-direction: column;
  min-height: ${props => (props.home ? "100vh" : "")};
  max-width: 124rem;
  border-bottom: 1px solid black;
  padding: ${props => (props.home ? "0" : "6rem 4rem 0 4rem")};
  margin: 0 auto;

  @media ${props => props.theme.mediaQueries.largePhone} {
    padding: ${props => (props.home ? "0" : "6rem 2rem 0 2rem")};
  }
`
export const Container = styled.div`
  display: flex;
`

export const SectionTitle = styled.h2`
  color: var(--white);
  font-size: 4rem;
  font-weight: 550;
  text-align: center;
  margin: 0;

  @media ${props => props.theme.mediaQueries.tablet} {
    height: 10vh;
  }

  @media ${props => props.theme.mediaQueries.largePhone} {
    height: 5vh;
    font-size: 3.5rem;
  }
`

export const Lead = styled.div`
  color: var(--white);
  text-align: ${props => (props.center ? "center" : "left")};
  p {
    font-size: 1.35rem;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 3.5rem;
    line-height: 1.75;
    letter-spacing: 1.5px;
  }

  @media ${props => props.theme.mediaQueries.largeDesktop} {
    p {
      font-size: 1.8rem;
    }
  }
  @media ${props => props.theme.mediaQueries.tablet} {
    text-align: center;
    p {
      font-size: ${props => (props.aboutMe ? "1.9rem" : "1.6rem")};
      margin: 1.5rem 0;
    }
  }

  @media ${props => props.theme.mediaQueries.largePhone} {
    p {
      font-size: ${props => (props.aboutMe ? "1.3rem" : "1.1rem")};
    }
  }
`

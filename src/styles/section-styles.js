import styled from "styled-components"

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.center ? "center" : "normal")};
  flex-direction: column;
  min-height: ${props => (props.home ? "100vh" : "")};
  max-width: 124rem;
  padding: ${props => (props.home ? "0" : "6rem 8rem 0 8rem")};
  margin: 0 auto;
  width: ${props => (props.contact ? "100%" : "")};

  @media ${props => props.theme.mediaQueries.tablet} {
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
  padding-bottom: 2rem;
  margin-top: ${props => (props.contact ? "2rem" : "")};
`

export const Lead = styled.div`
  color: var(--white);
  text-align: ${props => (props.center ? "center" : "left")};
  flex: ${props => (props.aboutMe ? "1 1 75%" : "")};
  p {
    font-size: 1.25rem;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 2.5rem;
    line-height: 1.75;
    letter-spacing: 1.5px;

    &:nth-child(2) {
      margin-bottom: 0;
    }
  }

  @media ${props => props.theme.mediaQueries.largeDesktop} {
    p {
      font-size: 1.5rem;
    }
  }
  @media ${props => props.theme.mediaQueries.tablet} {
    text-align: center;
    p {
      font-size: ${props => (props.aboutMe ? "1.9rem" : "1.6rem")};
      margin: ${props => (props.aboutMe ? "1.5rem 0 0 0" : "1.5rem 0")};
    }
  }

  @media ${props => props.theme.mediaQueries.largePhone} {
    p {
      font-size: ${props => (props.aboutMe ? "1.3rem" : "1.1rem")};
    }
  }
`

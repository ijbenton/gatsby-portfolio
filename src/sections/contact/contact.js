import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  StyledSection,
  Container,
  SectionTitle,
} from "../../styles/section-styles"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--white);
`

const Email = styled.h3`
  margin: 0 0 1.5rem 0;
  text-align: center;
  color: var(--text-highlight);
  span {
    font-weight: 400;
    font-size: 3rem;
    position: relative;
    font-style: italic;
    margin: 0;
    margin-bottom: 3.5rem;
    transition: color 0.2s ease-out;
    padding: 0 0.75rem;
  }

  @media ${props => props.theme.mediaQueries.largePhone} {
    margin: 1.5rem 0;
  }
`

const StyledLink = styled.a`
  margin: 2rem;
  padding: 0;
`

const ContactContainer = styled.div`
  background: ${props => props.theme.colors.darkTheme.card};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

const Contact = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            github
            instagram
            linkedin
            email
          }
        }
      }
    }
  `)
  return (
    <Container>
      <StyledSection contact id="contact">
        <ContactContainer>
          <SectionTitle contact>Contact Me!</SectionTitle>
          <Email>
            <span>hello@ianbenton.com</span>
          </Email>
          <SocialIcons>
            <StyledLink
              rel="noreferrer"
              target="_blank"
              aria-label="Github"
              href={`https://github.com/${site.siteMetadata.social.github}`}
            >
              <StyledIcon icon={faGithub} size="4x" />
            </StyledLink>
            <StyledLink
              rel="noreferrer"
              target="_blank"
              aria-label="Instagram"
              href={`https://www.instagram.com/${site.siteMetadata.social.instagram}`}
            >
              <StyledIcon icon={faInstagram} size="4x" />
            </StyledLink>
            <StyledLink
              rel="noreferrer"
              target="_blank"
              aria-label="Linkedin"
              href={`https://www.linkedin.com/in/${site.siteMetadata.social.linkedin}`}
            >
              <StyledIcon icon={faLinkedin} size="4x" />
            </StyledLink>
            <StyledLink
              rel="noreferrer"
              target="_top"
              aria-label="Email"
              href={`mailto:${site.siteMetadata.social.email}`}
            >
              <StyledIcon icon={faEnvelope} size="4x" />
            </StyledLink>
          </SocialIcons>
        </ContactContainer>
      </StyledSection>
    </Container>
  )
}

export default Contact

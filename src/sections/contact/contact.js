import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StyledSection } from "../../styles/section-styles"
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
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--white);
  margin: 2rem;
`

const StyledTitle = styled.h2`
  color: var(--white);
  font-size: 5rem;
  margin: 0 0 3rem 0;
  text-align: center;
  span {
    padding: 0.5rem;
    border-bottom: 2px solid var(--primary);
  }
`

const Email = styled.h3`
  margin-bottom: 3rem;
  text-align: center;
  color: var(--text-highlight);
  span {
    font-weight: 600;
    font-size: 3.5rem;
    position: relative;
    font-style: italic;
    margin: 0;
    margin-bottom: 3.5rem;
    transition: color 0.2s ease-out;
    padding: 0.5rem 0.75rem;
  }
`

const StyledLink = styled.a``

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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
    <StyledSection id="contact">
      <Container>
        <StyledTitle>
          <span>Contact Me!</span>
        </StyledTitle>
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
      </Container>
    </StyledSection>
  )
}

export default Contact

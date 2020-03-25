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

const Section = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--white);
`

const Email = styled.h3`
  margin: 0 0 1.5rem 0;
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
    padding: 0 0.75rem;
  }
`

const StyledLink = styled.a`
  margin: 2rem;
  padding: 0;
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
    <StyledSection plTransparent id="contact">
      <SectionTitle>
        <span>Contact Me!</span>
      </SectionTitle>
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
    </StyledSection>
  )
}

export default Contact

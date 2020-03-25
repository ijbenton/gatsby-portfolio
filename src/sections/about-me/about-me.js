import React from "react"
import { StyledSection, Container } from "../../styles/section-styles"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile } from "@fortawesome/free-solid-svg-icons"

import ButtonLink from "../../components/button-link/button-link"

const StyledTitle = styled.h2`
  color: var(--white);
  font-size: 3.5vw;
  text-align: center;
  margin: 0;
  span {
    padding: 0.5rem;
  }
`

const SubTitle = styled.h3`
  font-weight: 600;
  font-size: 2.75vw;
  text-align: center;
  font-style: italic;
  margin: 0 0 3.5rem 0;
  color: var(--text-highlight);

  span {
    padding: 0.5rem 0.75rem;
    border-radius: 5px;
    background: var(--primary-light);
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: inherit;
  margin-right: 0.5rem;
`

const Bio = styled.div`
  text-align: center;
  color: var(--text);
  margin: 2rem 4rem;
  p {
    font-size: 1.75vw;
  }
`

const Stack = styled.span`
  text-align: center;
  font-weight: bold;
  font-size: 2vw;
  color: var(--text-highlight);
  margin: 0 4rem 2rem 4rem;
`

const ButtonsWrapper = styled.div`
  margin: 0 auto;
`

const AboutMe = () => {
  const { allFile, allSite } = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "about-me" }, ext: { eq: ".md" } }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                resume
                stack
              }
              html
            }
          }
        }
      }
      allSite {
        edges {
          node {
            siteMetadata {
              site
            }
          }
        }
      }
    }
  `)
  return (
    <StyledSection id="about-me">
      <Container>
        <StyledTitle>
          <span>About Me</span>
        </StyledTitle>
        <Bio
          dangerouslySetInnerHTML={{
            __html: allFile.edges[0].node.childMarkdownRemark.html,
          }}
        />
        <SubTitle>
          <span>My Skills</span>
        </SubTitle>
        <Stack>
          {allFile.edges[0].node.childMarkdownRemark.frontmatter.stack}
        </Stack>
        <ButtonsWrapper>
          <ButtonLink
            target="_blank"
            rel="noreferrer"
            href={`${allSite.edges[0].node.siteMetadata.site}/${allFile.edges[0].node.childMarkdownRemark.frontmatter.resume}`}
          >
            <StyledIcon icon={faFile} />
            Resume
          </ButtonLink>
        </ButtonsWrapper>
      </Container>
    </StyledSection>
  )
}

export default AboutMe

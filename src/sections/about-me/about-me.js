import React from "react"
import {
  StyledSection,
  Container,
  SectionTitle,
  Lead,
} from "../../styles/section-styles"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile } from "@fortawesome/free-solid-svg-icons"

import ButtonLink from "../../components/button-link/button-link"

const SubTitle = styled.h3`
  font-weight: 600;
  font-size: 2.25rem;
  text-align: center;
  font-style: italic;
  margin: 2rem 0 3.5rem 0;
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

const Stack = styled.span`
  text-align: center;
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 1.3;
  color: var(--text-highlight);
  margin: 0 4rem 2rem 4rem;

  @media ${props => props.theme.mediaQueries.largePhone} {
    font-size: 1.5rem;
  }
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
    <Container pTransparent>
    <StyledSection id="about-me">
      <SectionTitle mTop>
       About Me
      </SectionTitle>
      <Lead
        center
        aboutMe
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
    </StyledSection>
    </Container>
  )
}

export default AboutMe

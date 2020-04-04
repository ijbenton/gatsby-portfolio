import React from "react"
import {
  StyledSection,
  Container,
  SectionTitle,
  Lead,
} from "../../styles/section-styles"
import styled from "styled-components"
import Img from "gatsby-image"
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
  font-size: 2.25rem;
  line-height: 1.3;
  color: var(--text-highlight);
  margin: 0 4rem 2rem 4rem;

  @media ${props => props.theme.mediaQueries.largePhone} {
    font-size: 1.5rem;
  }
`

const ButtonsWrapper = styled.div`
  margin: 0 auto;
  padding-bottom: 4rem;
`

const Description = styled.div`
  display: flex;
  padding: 2rem 3rem;
  align-items: center;
  background: ${props => props.theme.colors.darkTheme.card};

  @media ${props => props.theme.mediaQueries.tablet} {
    flex-direction: column;
  }
`

const Image = styled(Img)`
  margin-right: 4rem;
  flex: 1 1 25%;
  z-index: 5;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #222);

  @media ${props => props.theme.mediaQueries.tablet} {
    flex: 0 0 auto;
    width: 100%;
    margin: 0;
  }
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
                image {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
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
    <Container>
      <StyledSection id="about-me">
        <SectionTitle>About Me</SectionTitle>
        <Description>
          <Image
            fluid={
              allFile.edges[0].node.childMarkdownRemark.frontmatter.image
                .childImageSharp.fluid
            }
          />
          <Lead
            center
            aboutMe
            dangerouslySetInnerHTML={{
              __html: allFile.edges[0].node.childMarkdownRemark.html,
            }}
          />
        </Description>
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

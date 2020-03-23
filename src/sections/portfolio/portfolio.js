import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StyledSection } from "../../styles/section-styles"
import PortfolioItem from "../../templates/portfolio-item"
import styled from "styled-components"

const StyledTitle = styled.h2`
  color: var(--white);
  font-size: 5rem;
  color: var(--text);
  text-align: center;
  span {
    padding: 0.5rem;
    border-bottom: 2px solid var(--primary);
  }
`

const Portfolio = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "portfolio" }, ext: { eq: ".md" } }
        sort: { order: DESC, fields: absolutePath }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                live
                source
                stack
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 80) {
                      tracedSVG
                      srcWebp
                      srcSetWebp
                      srcSet
                      src
                      sizes
                      presentationWidth
                      presentationHeight
                      originalName
                      originalImg
                      base64
                      aspectRatio
                    }
                  }
                }
              }
              html
            }
          }
        }
      }
    }
  `)

  return (
    <StyledSection id="portfolio">
      <StyledTitle>
        <span>My Portfolio</span>
      </StyledTitle>
      {allFile.edges.map(({ node }) => (
        <PortfolioItem node={node} />
      ))}
    </StyledSection>
  )
}

export default Portfolio

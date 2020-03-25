import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StyledSection, SectionTitle } from "../../styles/section-styles"
import PortfolioItem from "../../templates/portfolio-item"
import styled from "styled-components"

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
      <SectionTitle>
        <span>My Portfolio</span>
      </SectionTitle>
      {allFile.edges.map(({ node }) => (
        <PortfolioItem node={node} />
      ))}
    </StyledSection>
  )
}

export default Portfolio

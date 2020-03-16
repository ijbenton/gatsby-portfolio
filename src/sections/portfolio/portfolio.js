import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StyledSection } from "../../styles/section-styles"
import PortfolioItem from "../../templates/portfolio-item"

const Portfolio = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: fileAbsolutePath }) {
        edges {
          node {
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
  `)
  return (
    <StyledSection id="portfolio">
      {allMarkdownRemark.edges.map(({ node }) => (
        <PortfolioItem node={node} />
      ))}
    </StyledSection>
  )
}

export default Portfolio

import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StyledSection } from "../../styles/section-styles"
import PortfolioItem from "../../templates/portfolio-item"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import styled from "styled-components"

const StyledParallaxLayer = styled(ParallaxLayer)`

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
    <StyledParallaxLayer offset={1} speed={1} factor={6} id="portfolio">
      {allFile.edges.map(({ node }) => (
        <PortfolioItem node={node} />
      ))}
    </StyledParallaxLayer>
  )
}

export default Portfolio

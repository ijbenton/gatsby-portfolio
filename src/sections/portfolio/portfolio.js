import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StyledSection } from "../../styles/section-styles"
import PortfolioItem from "../../templates/portfolio-item"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"

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
    <ParallaxLayer
      offset={1}
      speed={1}
      style={{ backgroundColor: "#805E73", border: "2px solid white" }}
      id="portfolio"
    >
      {allFile.edges.map(({ node }) => (
        <PortfolioItem node={node} />
      ))}
    </ParallaxLayer>
  )
}

export default Portfolio

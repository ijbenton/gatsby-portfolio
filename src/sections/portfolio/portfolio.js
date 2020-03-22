import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StyledSection } from "../../styles/section-styles"
import PortfolioItem from "../../templates/portfolio-item"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

const StyledParallaxLayer = styled(ParallaxLayer)``

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

  const isXsHeight = useMediaQuery({ maxDeviceHeight: "545px" })
  const isSmartPhone = useMediaQuery({
    maxDeviceWidth: "480px",
    maxDeviceHeight: "800px",
  })
  const isXlSmartPhone = useMediaQuery({
    maxDeviceWidth: "480px",
    minDeviceHeight: "801px",
  })
  const isSmallHeight = useMediaQuery({
    minDeviceHeight: "546px",
    maxDeviceHeight: "799px",
    minDeviceWidth: "480px",
  })
  const isMediumHeight = useMediaQuery({
    minDeviceHeight: "800px",
    maxDeviceHeight: "999px",
    minDeviceWidth: "480px",
  })
  const isLargeHeight = useMediaQuery({ minDeviceHeight: "1000px" })
  const isLargeDesktop = useMediaQuery({
    minDeviceHeight: "1000px",
    minDeviceWidth: "1025px",
  })
  return (
    <StyledParallaxLayer
      offset={1}
      speed={1}
      factor={
        isXsHeight
          ? "5"
          : isSmallHeight || isLargeDesktop
          ? "4"
          : isMediumHeight || isSmartPhone
          ? "3"
          : isLargeHeight || isXlSmartPhone
          ? "2"
          : "5"
      }
      id="portfolio"
    >
      <StyledTitle>
        <span>My Portfolio</span>
      </StyledTitle>
      {allFile.edges.map(({ node }) => (
        <PortfolioItem node={node} />
      ))}
    </StyledParallaxLayer>
  )
}

export default Portfolio

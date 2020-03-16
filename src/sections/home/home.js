import React from "react"
import { Link } from "react-scroll"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { StyledSection } from "../../styles/section-styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronCircleDown,
  faLaptop,
  faCode,
  faMoneyBill,
  faThumbsUp,
  faRunning,
  faSmile,
} from "@fortawesome/free-solid-svg-icons"
import { Parallax } from "react-scroll-parallax"
import { useSpring, animated, config } from "react-spring"

const StyledTitle = styled(animated.h1)`
  color: white;
  font-size: 3rem;
  margin-bottom: 0.5rem;
`

const Highlight = styled.span`
  color: var(--primary-lighter);
`

const ParallaxImages = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

// const ParallaxWrapper = styled.div`
//   height: 100%;
//   width: 100%;
// `

const ParallaxImage = styled(animated(Img))`
  transition: all 1s ease-out;
  z-index: 20;
`

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const Home = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "home" }, ext: { eq: ".md" } }
      ) {
        edges {
          node {
            id
            absolutePath
            childMarkdownRemark {
              id
              frontmatter {
                bounds
                image {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      tracedSVG
                      srcWebp
                      srcSetWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const ParallaxSpring = useSpring({
    config: config.wobbly,
    delay: 300,
    opacity: 1,
    transform: "translateY(0px)",
    from: {
      opacity: 0,
      transform: "translateY(200px)",
    },
  })
  const yOff = getRandomInt(50, -100)
  // (<ParallaxImages>
  //   <Parallax y={["100px", "300px"]}>
  //     <ParalaxIcon icon={faLaptop} size="2x" style={ParallaxSpring} />
  //   </Parallax>
  //   <Parallax y={["100px", "-200px"]}>
  //     <ParalaxIcon icon={faCode} size="2x" style={ParallaxSpring} />
  //   </Parallax>
  //   <Parallax y={["100px", "300px"]}>
  //     <ParalaxIcon icon={faMoneyBill} size="2x" style={ParallaxSpring} />
  //   </Parallax>
  //   <Parallax y={["100px", "-200px"]}>
  //     <ParalaxIcon icon={faThumbsUp} size="2x" style={ParallaxSpring} />
  //   </Parallax>
  //   <Parallax y={["100px", "300px"]}>
  //     <ParalaxIcon icon={faRunning} size="2x" style={ParallaxSpring} />
  //   </Parallax>
  //   <Parallax y={["100px", "-200px"]}>
  //     <ParalaxIcon icon={faSmile} size="2x" style={ParallaxSpring} />
  //   </Parallax>
  // </ParallaxImages>)
  return (
    <StyledSection id="home">
      <ParallaxImages>
        {allFile.edges.map(({ node }, i) => {
          console.log(node)
          return (
            <Parallax y={[yOff * i + "px", -yOff * i + "px"]}>
              <Img
                fluid={
                  node.childMarkdownRemark.frontmatter.image.childImageSharp
                    .fluid
                }
                style={{
                  width: "15rem",
                  height: "15rem",
                }}
              />
            </Parallax>
          )
        })}
      </ParallaxImages>
      <StyledTitle style={ParallaxSpring}>Hello 🤙,</StyledTitle>
      <StyledTitle style={ParallaxSpring}>
        I'm <Highlight>Ian</Highlight>
      </StyledTitle>
      <Link to="portfolio" spy={true} smooth={true}>
        <FontAwesomeIcon icon={faChevronCircleDown} />
      </Link>
    </StyledSection>
  )
}

export default Home

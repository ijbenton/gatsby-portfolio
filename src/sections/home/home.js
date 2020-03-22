import React from "react"
import { Link } from "react-scroll"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { StyledSection } from "../../styles/section-styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import range from "lodash-es/range"
import {
  faChevronCircleDown,
  faLaptop,
  faCode,
  faMoneyBill,
  faThumbsUp,
  faRunning,
  faSmile,
} from "@fortawesome/free-solid-svg-icons"
import { useSpring, animated, config } from "react-spring"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import Typewriter from "typewriter-effect"

const StyledTitle = styled(animated.div)`
  color: var(--white);
  font-size: 5rem;
  margin-bottom: 0.5rem;
`
const StyledSlogan = styled(animated.div)`
  display: flex;
  align-items: center;
  color: var(--text);
  font-size: 3rem;
  .Typewriter {
    padding: 0.5rem;
    font-weight: bold;
    color: var(--white);
  }
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
  z-index: 20;
  height: 10rem;
  width: 10rem;
`

const StyledIcon = styled(animated(FontAwesomeIcon))`
  margin-top: 1rem;
  color: white;
  cursor: pointer;
`

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const items = range(4)
const interp = i => r =>
  `translate3d(0, ${90 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

const Home = ({ handleClick }) => {
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

  return (
    <ParallaxLayer
      offset={0}
      speed={1}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StyledTitle style={ParallaxSpring}>
        Hi, I'm <Highlight>Ian Benton</Highlight>
      </StyledTitle>
      <StyledSlogan style={ParallaxSpring}>
        <span>A</span>
        <Typewriter
          options={{
            strings: [
              "passionate",
              "hard-working",
              "self-motivated",
              "dedicated",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <span>web developer</span>
      </StyledSlogan>

      <StyledIcon
        icon={faChevronCircleDown}
        size="3x"
        style={ParallaxSpring}
        onClick={() => handleClick(1)}
      />
    </ParallaxLayer>
  )
}

export default Home

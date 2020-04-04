import React from "react"
import styled from "styled-components"
import { StyledSection, Container } from "../../styles/section-styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons"
import { useSpring, animated, config } from "react-spring"
import Typewriter from "typewriter-effect"
import { Link } from "react-scroll"

const StyledTitle = styled(animated.div)`
  color: var(--white);
  font-size: 5rem;
  margin-bottom: 0.5rem;

  @media ${props => props.theme.mediaQueries.largePhone} {
    font-size: 3.5rem;
  }
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

  @media ${props => props.theme.mediaQueries.largePhone} {
    font-size: 1.9rem;
  }
`

const Highlight = styled.span`
  color: var(--primary-light);
  font-weight: bold;
`

const StyledIcon = styled(animated(FontAwesomeIcon))`
  margin-top: 2rem;
  color: white;
  cursor: pointer;

  @media ${props => props.theme.mediaQueries.largePhone} {
    margin-top: 1.5rem;
  }
`
const Home = () => {
  const HomeAnimation = useSpring({
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
    <StyledSection home center id="home">
      <StyledTitle style={HomeAnimation}>
        Hi, I'm <Highlight>Ian Benton</Highlight>
      </StyledTitle>
      <StyledSlogan style={HomeAnimation}>
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

      <Link to="portfolio" smooth={true}>
        <StyledIcon
          icon={faChevronCircleDown}
          size="3x"
          style={HomeAnimation}
        />
      </Link>
    </StyledSection>
  )
}

export default Home

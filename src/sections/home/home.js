import React from "react"
import styled from "styled-components"
import { HomeSection, Container } from "../../styles/section-styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons"
import { useSpring, animated, config } from "react-spring"
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
  color: var(--primary-light);
  font-weight: bold;
`

const StyledIcon = styled(animated(FontAwesomeIcon))`
  margin-top: 1rem;
  color: white;
  cursor: pointer;
`
const Home = ({ handleClick }) => {
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
    <HomeSection id="home">
    <Container>
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

      <StyledIcon
        icon={faChevronCircleDown}
        size="3x"
        style={HomeAnimation}
        onClick={() => handleClick(1)}
      />
      </Container>
    </HomeSection>
  )
}

export default Home

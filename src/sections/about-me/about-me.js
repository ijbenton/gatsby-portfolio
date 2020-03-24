import React from "react"
import { StyledSection } from "../../styles/section-styles"
import styled from "styled-components"

const StyledTitle = styled.h2`
  color: var(--white);
  font-size: 5rem;
  text-align: center;
  span {
    padding: 0.5rem;
    border-bottom: 2px solid var(--primary);
  }
`

const AboutMe = () => {
  return (
    <StyledSection id="about-me">

      <StyledTitle>
        <span>About Me</span>
      </StyledTitle>
 
    </StyledSection>
  )
}

export default AboutMe

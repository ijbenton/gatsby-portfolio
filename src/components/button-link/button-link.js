import React from "react"
import styled from "styled-components"

const StyledLink = styled.a`
  outline: none;
  background: ${({ solid }) => (solid ? "var(--primary)" : "transparent")};
  color: ${({ solid }) => (solid ? "var(--white)" : "var(--text-highlight)")};
  text-transform: uppercase;
  text-decoration: none;
  font-family: inherit;
  display: flex;
  align-items: center;
  font-weight: 700;
  letter-spacing: 1.5px;
  border: ${({ solid }) => (solid ? "1px transparent" : "1px solid")};
  border-radius: 7rem;
  font-size: 1vw;
  padding: 1rem 2.25rem;
  margin: 0rem;
  cursor: pointer;
  box-shadow: ${({ solid }) =>
    solid ? "0px 8px 15px var(--shadow-color)" : "none"};
  transition: all 0.2s ease-out;
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ solid }) =>
      solid ? "0px 15px 20px var(--shadow-btn)" : "none"};
  }
  &:active {
    transform: translateY(1px);
    box-shadow: ${({ solid }) =>
      solid ? "0 3px 10px var(--shadow-btn)" : "none"};
  }
`

const ButtonLink = ({ children, solid, ...otherProps }) => (
  <StyledLink solid={solid} {...otherProps}>
    {children}
  </StyledLink>
)

export default ButtonLink

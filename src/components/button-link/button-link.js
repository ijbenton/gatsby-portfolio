import React from "react"
import styled from "styled-components"

const StyledLink = styled.a`
  outline: none;
  background: ${({ solid }) =>
    solid ? "var(--primary-light)" : "var(--background)"};
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
  font-size: 1.25rem;
  padding: 1rem 2.25rem;
  margin: 0rem;
  cursor: pointer;
  box-shadow: ${({ solid }) =>
    solid ? "0px 8px 15px var(--shadow-color)" : "none"};
  transition: all 0.2s ease-out;
  &:hover {
    transform: translateY(-3px);
    background: ${({ solid }) =>
      solid ? "var(--primary)" : "var(--background)"};
  }

  @media ${props => props.theme.mediaQueries.tablet} {
    font-size: 2rem;
  }
  @media ${props => props.theme.mediaQueries.largePhone} {
    font-size: 1rem;
  }
`

const ButtonLink = ({ children, solid, ...otherProps }) => (
  <StyledLink solid={solid} {...otherProps}>
    {children}
  </StyledLink>
)

export default ButtonLink

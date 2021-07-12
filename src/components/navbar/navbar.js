import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.25);
    opacity: 1;
  }
`

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  max-width: 100vw;
  top: 0;
  left: 0;
  z-index: 10;
  font-size: 2rem;
  background: var(--background);
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  max-width: 124rem;
  padding: 0 8rem;
  margin: 0 auto;

  @media ${props => props.theme.mediaQueries.tablet} {
    padding: 0 2rem;
  }
`

const StyledNav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  @media ${props => props.theme.mediaQueries.largePhone} {
    display: none;
  }
`

const StyledLink = styled(Link)`
  color: #d8dbe2;
  padding-right: 4rem;
  cursor: pointer;
  transition: color 0.15s ease-out;

  // Prevent hover state on touch devices
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: var(--primary-light);
    }
  }

  &:active {
    color: var(--primary-light);
  }

  &:last-child {
    padding: ${props => (props.mobileEndLink ? "" : "0")};
  }
`

const MobileMenu = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(100vh - 60px);
  z-index: 5;
  display: flex;
  transition: all 0.3s ease-in-out 0s;
  opacity: ${props => (props.isMenuOpen ? 1 : 0.2)};
  transform: ${props => (props.isMenuOpen ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
`

const MobileNav = styled.nav`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--primary-light);
  color: var(--white);

  a {
    font-weight: bold;
    font-size: 3rem;
    padding: 2rem 0;
  }
`

const MobileIcon = styled(FontAwesomeIcon)`
  z-index: 25;
  color: var(--white);
  display: none;

  @media ${props => props.theme.mediaQueries.largePhone} {
    display: inline-block;
  }
`

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true)
    } else {
      setIsMenuOpen(false)
    }
  }

  return (
    <StyledHeader>
      <Wrapper>
        <StyledLink
          to="home"
          smooth={true}
          onClick={() => {
            if (isMenuOpen) toggleMenu()
          }}
        >
          Ian Benton
        </StyledLink>
        <MobileIcon
          onClick={() => toggleMenu()}
          icon={isMenuOpen ? faTimes : faBars}
        />
        <StyledNav>
          <StyledLink to="portfolio" smooth={true}>
            Portfolio
          </StyledLink>
          <StyledLink to="about-me" smooth={true}>
            About Me
          </StyledLink>
          <StyledLink to="contact" smooth={true}>
            Contact
          </StyledLink>
        </StyledNav>
        <MobileMenu isMenuOpen={isMenuOpen}>
          <MobileNav>
            <StyledLink
              to="portfolio"
              smooth={true}
              onClick={() => {
                toggleMenu()
              }}
            >
              Portfolio
            </StyledLink>
            <StyledLink
              to="about-me"
              smooth={true}
              onClick={() => {
                toggleMenu()
              }}
            >
              About Me
            </StyledLink>
            <StyledLink
              to="contact"
              smooth={true}
              mobileEndLink
              onClick={() => {
                toggleMenu()
              }}
            >
              Contact
            </StyledLink>
          </MobileNav>
        </MobileMenu>
      </Wrapper>
    </StyledHeader>
  )
}

export default Navbar

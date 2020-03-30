import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-scroll"
import { useMediaQuery } from "react-responsive"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  max-width: 100vw;
  top: 0;
  left: 0;
  z-index: 10;
  font-size: 2rem;
  background: var(--background);
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 124rem;
  &:first-child {
    margin-left: 4rem;
    padding: 0;
  }
`

const StyledNav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-right: 4rem;
`

const StyledLink = styled(Link)`
  color: #d8dbe2;
  padding: 0 2rem;
  cursor: pointer;
  transition: color 0.15s ease-out;
  &:hover {
    color: var(--primary);
  }
`

const MobileMenu = styled.div`
  position: fixed;
  top: 60px;
  width: 100%;
  height: calc(100vh - 60px);
  z-index: 5;
  display: ${props => (props.isMenuOpen === true ? "flex" : "none")};
`

const MobileNav = styled.nav`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--primary);
  color: var(--white);

  a {
    font-weight: bold;
    font-size: 3rem;
    padding: 2rem 0;
  }
`

const NavIcon = styled(FontAwesomeIcon)`
  z-index: 25;
  color: var(--white);
  margin-right: 4rem;
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

  // Media Queries
  const isTablet = useMediaQuery({
    maxDeviceWidth: "1024px",
    minDeviceWidth: "768px",
  })

  const isMobile = useMediaQuery({
    maxDeviceWidth: "700px",
  })

  return (
    <StyledHeader>
      <Wrapper>
        <StyledLink
          to="home"
          smooth={true}
          onClick={() => {
            if (isMobile && isMenuOpen) toggleMenu()
          }}
        >
          Ian Benton
        </StyledLink>
        {isMobile ? (
          <NavIcon
            onClick={() => toggleMenu()}
            icon={isMenuOpen ? faTimes : faBars}
          />
        ) : (
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
        )}
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

import { Link } from "react-scroll"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
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
  span {
    color: #d8dbe2;
  }
`

const StyledNav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-right: 4rem;
  span {
    cursor: pointer;
    padding: 0 2rem;
    transition: color 0.15s ease-out;
    &:hover {
      color: var(--primary);
    }
  }
`

const Logo = styled.div`
  color: #d8dbe2;
  margin-left: 4rem;
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

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  background: var(--primary);
  color: var(--white);

  li {
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

const Navbar = ({ handleClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Media Queries
  const isTablet = useMediaQuery({
    maxDeviceWidth: "1024px",
    minDeviceWidth: "768px",
  })

  const isMobile = useMediaQuery({
    maxDeviceWidth: "700px",
  })

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
        <Logo
          onClick={() => {
            handleClick(0)
            if (isMobile && isMenuOpen) {
              toggleMenu()
            }
          }}
        >
          Ian Benton
        </Logo>
        {isMobile ? (
          <NavIcon
            onClick={() => toggleMenu()}
            icon={isMenuOpen ? faTimes : faBars}
          />
        ) : (
          <StyledNav>
            <span onClick={() => handleClick(isTablet ? "1.05" : "1")}>
              Portfolio
            </span>
            <span onClick={() => handleClick(isTablet ? "8.05" : "7.6")}>
              About Me
            </span>
            <span onClick={() => handleClick(isTablet ? "9" : "8.6")}>
              Contact
            </span>
          </StyledNav>
        )}
        <MobileMenu isMenuOpen={isMenuOpen}>
          <StyledList>
            <li
              onClick={() => {
                handleClick(isTablet ? "1.05" : "1")
                toggleMenu()
              }}
            >
              Portfolio
            </li>
            <li
              onClick={() => {
                handleClick(isTablet ? "8.05" : "7.6")
                toggleMenu()
              }}
            >
              About Me
            </li>
            <li
              onClick={() => {
                handleClick(isTablet ? "9" : "8.6")
                toggleMenu()
              }}
            >
              Contact
            </li>
          </StyledList>
        </MobileMenu>
      </Wrapper>
    </StyledHeader>
  )
}

export default Navbar

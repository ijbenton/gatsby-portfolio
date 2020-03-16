import { Link } from "react-scroll"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  max-width: 100vw;
  top: 0;
  left: 0;
  z-index: 20;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  justify-content: space-between;
  height: 60px;
  margin: 0 3rem;
  a {
    color: #d8dbe2;
  }
`

const StyledNav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  a {
    padding: 0 2rem;
  }
`

const Logo = styled.div`
  a {
    color: white;
  }
`

const Navbar = () => (
  <StyledHeader>
    <Wrapper>
      <Logo>
        <Link to="home" spy={true} smooth={true}>
          Ian Benton
        </Link>
      </Logo>
      <StyledNav>
        <Link to="portfolio" spy={true} smooth={true}>
          Portfolio
        </Link>
        <Link to="about-me" spy={true} smooth={true}>
          About Me
        </Link>
        <Link to="contact" spy={true} smooth={true}>
          Contact
        </Link>
      </StyledNav>
    </Wrapper>
  </StyledHeader>
)

export default Navbar

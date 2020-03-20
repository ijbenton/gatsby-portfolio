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
  z-index: 5;
  font-size: 2rem;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  justify-content: space-between;
  height: 60px;
  background: var(--background);
  span {
    color: #d8dbe2;
  }
`

const StyledNav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-right: 3rem;
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
  margin-left: 3rem;
  cursor: pointer;
  transition: color 0.15s ease-out;
  &:hover {
    color: var(--primary);
  }
`

const Navbar = ({ handleClick }) => (
  <StyledHeader>
    <Wrapper>
      <Logo onClick={() => handleClick(0)}>Ian Benton</Logo>
      <StyledNav>
        <span onClick={() => handleClick(1)}>Portfolio</span>
        <span onClick={() => handleClick(4)}>About Me</span>

        <span onClick={() => handleClick(5)}>Contact</span>
      </StyledNav>
    </Wrapper>
  </StyledHeader>
)

export default Navbar

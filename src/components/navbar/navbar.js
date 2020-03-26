import { Link } from "react-scroll"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  max-width: 100vw;
  top: 0;
  left: 0;
  z-index: 21;
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

const Navbar = ({ handleClick }) => {
  // Media Queries
  const isXsHeight = useMediaQuery({ maxDeviceHeight: "545px" })
  const isSmartPhone = useMediaQuery({
    maxDeviceWidth: "480px",
    maxDeviceHeight: "800px",
  })
  const isXlSmartPhone = useMediaQuery({
    maxDeviceWidth: "480px",
    minDeviceHeight: "801px",
  })
  const isSmallHeight = useMediaQuery({
    minDeviceHeight: "546px",
    maxDeviceHeight: "799px",
    minDeviceWidth: "480px",
  })
  const isTablet = useMediaQuery({
    maxDeviceWidth: "1024px",
    minDeviceWidth: "768px",
  })

  const isMobile = useMediaQuery({
    maxDeviceWidth: "700px",
  })
  const isLargeHeight = useMediaQuery({ minDeviceHeight: "1000px" })
  const isSmallDesktop = useMediaQuery({
    minDeviceHeight: "1000px",
    minDeviceWidth: "1025px",
  })
  const isLargeDesktop = useMediaQuery({
    minDeviceHeight: "1000px",
    minDeviceWidth: "1025px",
  })

  return (
    <StyledHeader>
      <Wrapper>
        <Logo onClick={() => handleClick(0)}>Ian Benton</Logo>
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
      </Wrapper>
    </StyledHeader>
  )
}

export default Navbar

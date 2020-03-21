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
  margin-right: 4rem;
  span {
    cursor: pointer;
    padding: 0 2rem;
    transition: color 0.15s ease-out;
    &:hover {
      color: var(--primary-lighter);
    }
  }
`

const Logo = styled.div`
  color: #d8dbe2;
  margin-left: 4rem;
  cursor: pointer;
  transition: color 0.15s ease-out;
  &:hover {
    color: var(--primary-lighter);
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
  const isMediumHeight = useMediaQuery({
    minDeviceHeight: "800px",
    maxDeviceHeight: "999px",
    minDeviceWidth: "480px",
  })
  const isLargeHeight = useMediaQuery({ minDeviceHeight: "1000px" })
  const isLargeDesktop = useMediaQuery({
    minDeviceHeight: "1000px",
    minDeviceWidth: "1025px",
  })

  return (
    <StyledHeader>
      <Wrapper>
        <Logo onClick={() => handleClick(0)}>Ian Benton</Logo>
        <StyledNav>
          <span onClick={() => handleClick(1)}>Portfolio</span>
          <span
            onClick={() =>
              handleClick(
                isXsHeight
                  ? "6"
                  : isSmallHeight || isLargeDesktop
                  ? "5"
                  : isMediumHeight || isSmartPhone
                  ? "4"
                  : isLargeHeight || isXlSmartPhone
                  ? "3"
                  : "6"
              )
            }
          >
            About Me
          </span>

          <span
            onClick={() =>
              handleClick(
                isXsHeight
                  ? "7"
                  : isSmallHeight || isLargeDesktop
                  ? "6"
                  : isMediumHeight || isSmartPhone
                  ? "5"
                  : isLargeHeight || isXlSmartPhone
                  ? "4"
                  : "7"
              )
            }
          >
            Contact
          </span>
        </StyledNav>
      </Wrapper>
    </StyledHeader>
  )
}

export default Navbar

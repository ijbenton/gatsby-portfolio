/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"

import GlobalStyles from "../styles/global"
import theme from "../styles/theme"
import SEO from "../components/seo"

const StyledMain = styled.main`
  height: 100%;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <SEO />
    <StyledMain>{children}</StyledMain>
    <GlobalStyles />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

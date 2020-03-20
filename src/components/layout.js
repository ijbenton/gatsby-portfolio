/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"

import GlobalStyles from "../styles/global"
import theme from "../styles/theme"
import SEO from "../components/seo"
import Navbar from "./navbar/navbar"

const StyledMain = styled.main``

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <SEO />
   {
      //  <Navbar />
      }
      <StyledMain>{children}</StyledMain>
      <GlobalStyles />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

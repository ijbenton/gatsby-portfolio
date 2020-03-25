import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { animated, useSpring } from "react-spring"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import { Keyframes } from "react-spring/renderprops"
import Navbar from "../components/navbar/navbar"
import { useMediaQuery } from "react-responsive"

import { multipleBoxShadow } from "../styles/helpers"

import Layout from "../components/layout"
import Home from "../sections/home/home"
import AboutMe from "../sections/about-me/about-me"
import Portfolio from "../sections/portfolio/portfolio"
import Contact from "../sections/contact/contact"

let shadowsSmall = multipleBoxShadow(700)
let shadowsMedium = multipleBoxShadow(200)
let shadowsBig = multipleBoxShadow(100)

const SmallStarsLayer = styled(animated.div)`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${shadowsSmall};

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${shadowsSmall};
  }
`
const MediumStarsLayer = styled(animated.div)`
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: ${shadowsMedium};

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${shadowsMedium};
  }
`
const BigStarsLayer = styled(animated.div)`
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: ${shadowsBig};

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${shadowsBig};
  }
`

const StyledParallaxLayer = styled(ParallaxLayer)`
  background: ${props =>
    props.pTransparent
      ? "var(--p-transparent)"
      : props.plTransparent
      ? "var(--pl-transparent)"
      : ""};
`

const IndexPage = () => {
  // Query for Parallax Page Images
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "images" }, ext: { eq: ".png" } }
        sort: { order: ASC, fields: absolutePath }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 800, quality: 80) {
                tracedSVG
                srcWebp
                srcSetWebp
                srcSet
                src
                sizes
                presentationWidth
                presentationHeight
                originalName
                originalImg
                base64
                aspectRatio
              }
            }
            absolutePath
          }
        }
      }
    }
  `)
  // Stars Animations
  const SmallStarsAnimation = Keyframes.Spring(async next => {
    while (true) {
      await next({
        transform: "translateY(-2000px)",
        from: { transform: "translateY(0px)" },
      })
    }
  })
  const MediumStarsAnimation = Keyframes.Spring(async next => {
    while (true) {
      await next({
        transform: "translateY(-2000px)",
        from: { transform: "translateY(0px)" },
      })
    }
  })
  const BigStarsAnimation = Keyframes.Spring(async next => {
    while (true) {
      await next({
        transform: "translateY(-2000px)",
        from: { transform: "translateY(0px)" },
      })
    }
  })

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

  // Parallax Scroll To
  let parallax
  const handleClick = pageNum => {
    parallax.scrollTo(pageNum)
  }
  return (
    <Layout>
      <Navbar handleClick={handleClick} />
      <Parallax
        pages={
          isXsHeight
            ? "8"
            : isSmallHeight || isLargeDesktop
            ? "7"
            : isMediumHeight || isSmartPhone
            ? "6"
            : isLargeHeight || isXlSmartPhone
            ? "5"
            : "8"
        }
        ref={ref => (parallax = ref)}
      >
        <SmallStarsAnimation reset config={{ duration: 50000 }}>
          {styles => <SmallStarsLayer style={styles} />}
        </SmallStarsAnimation>
        <MediumStarsAnimation reset config={{ duration: 100000 }}>
          {styles => <MediumStarsLayer style={styles} />}
        </MediumStarsAnimation>
        <BigStarsAnimation reset config={{ duration: 150000 }}>
          {styles => <BigStarsLayer style={styles} />}
        </BigStarsAnimation>
        <StyledParallaxLayer offset={0} speed={1} factor={1}>
          <Home handleClick={handleClick} />
        </StyledParallaxLayer>
        <StyledParallaxLayer
          offset={1}
          speed={0.8}
          factor={
            isXsHeight
              ? "5"
              : isSmallHeight || isLargeDesktop
              ? "4"
              : isMediumHeight || isSmartPhone
              ? "3"
              : isLargeHeight || isXlSmartPhone
              ? "2"
              : "5"
          }
        >
          <Portfolio />
        </StyledParallaxLayer>

        <StyledParallaxLayer
          pTransparent
          offset={
            isXsHeight
              ? "6"
              : isSmallHeight || isLargeDesktop
              ? "5"
              : isMediumHeight || isSmartPhone
              ? "4"
              : isLargeHeight || isXlSmartPhone
              ? "3"
              : "6"
          }
          speed={1}
        >
          <AboutMe />
        </StyledParallaxLayer>

        <StyledParallaxLayer
          plTransparent
          offset={
            isXsHeight
              ? "7"
              : isSmallHeight || isLargeDesktop
              ? "6"
              : isMediumHeight || isSmartPhone
              ? "5"
              : isLargeHeight || isXlSmartPhone
              ? "4"
              : "7"
          }
          speed={1}
        />
        <StyledParallaxLayer
          offset={
            isXsHeight
              ? "7"
              : isSmallHeight || isLargeDesktop
              ? "6"
              : isMediumHeight || isSmartPhone
              ? "5"
              : isLargeHeight || isXlSmartPhone
              ? "4"
              : "7"
          }
          factor={0.5}
          speed={1}
        >
          <Contact />
        </StyledParallaxLayer>

        <ParallaxLayer
          offset={
            isXsHeight
              ? "7.5"
              : isSmallHeight || isLargeDesktop
              ? "6.5"
              : isMediumHeight || isSmartPhone
              ? "5.5"
              : isLargeHeight || isXlSmartPhone
              ? "4.5"
              : "7.5"
          }
          speed={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <Img
            fadeIn={false}
            fluid={allFile.edges[1].node.childImageSharp.fluid}
            style={{ width: "40%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.99}
          speed={0.8}
          style={{ opacity: 0.075, zIndex: "-3" }}
        >
          <Img
            fadeIn={false}
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "55%" }}
          />
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.8}
          speed={0.5}
          style={{ opacity: 0.075, zIndex: "-3" }}
        >
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "70%" }}
          />
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.99}
          speed={0.2}
          style={{ opacity: 0.15, zIndex: "-3" }}
        >
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "10%" }}
          />
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.4}
          speed={-0.1}
          style={{ opacity: 0.3, zIndex: "-3" }}
        >
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "60%" }}
          />
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "25%", marginLeft: "30%" }}
          />
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.6}
          speed={0.4}
          style={{ opacity: 0.45, zIndex: "-3" }}
        >
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "5%" }}
          />
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0.8}
          style={{ opacity: 0.075, zIndex: "-3" }}
        >
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "55%" }}
          />
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.8}
          speed={0.5}
          style={{ opacity: 0.075, zIndex: "-3" }}
        >
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "70%" }}
          />
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0.2}
          style={{ opacity: 0.15, zIndex: "-3" }}
        >
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "10%" }}
          />
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.4}
          speed={-0.1}
          style={{ opacity: 0.3, zIndex: "-3" }}
        >
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "60%" }}
          />
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "25%", marginLeft: "30%" }}
          />
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4.6}
          speed={0.4}
          style={{ opacity: 0.45, zIndex: "-3" }}
        >
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "5%" }}
          />
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          speed={0.8}
          style={{ opacity: 0.075, zIndex: "-3" }}
        >
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "55%" }}
          />
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={5.8}
          speed={0.5}
          style={{ opacity: 0.075, zIndex: "-3" }}
        >
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "70%" }}
          />
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          speed={0.2}
          style={{ opacity: 0.15, zIndex: "-3" }}
        >
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "10%" }}
          />
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={5.4}
          speed={-0.1}
          style={{ opacity: 0.3, zIndex: "-3" }}
        >
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "60%" }}
          />
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "25%", marginLeft: "30%" }}
          />
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6.6}
          speed={0.4}
          style={{ opacity: 0.45, zIndex: "-3" }}
        >
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "5%" }}
          />
          <Img
            fadeIn={false}
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>
      </Parallax>
    </Layout>
  )
}

export default IndexPage

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

const Contained = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 60px 1fr;
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
                ...GatsbyImageSharpFluid_noBase64
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
  const isMobileOrTablet = useMediaQuery({ maxDeviceWidth: "1024px" })
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

  const isTablet = useMediaQuery({
    maxDeviceWidth: "1024px",
    minDeviceWidth: "768px",
  })

  const isMobile = useMediaQuery({
    maxDeviceWidth: "700px",
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
        style={{ zIndex: "20", top: "60px" }}
        pages={isTablet || isMobile ? "10" : "9.65"}
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

        <ParallaxLayer
          offset={isTablet || isMobile ? "9.5" : "9.1"}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <Img
            fluid={allFile.edges[1].node.childImageSharp.fluid}
            style={{ width: isMobileOrTablet ? "80%" : "40%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.99}
          speed={0.8}
          style={{ opacity: 0.075, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "55%" }}
          />
          <Img
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
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "70%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.99}
          speed={0.2}
          style={{ opacity: 0.15, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "10%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.4}
          speed={-0.1}
          style={{ opacity: 0.25, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "25%", marginLeft: "10%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "85%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.6}
          speed={0.4}
          style={{ opacity: 0.35, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "5%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "15%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.8}
          style={{ opacity: 0.075, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "55%" }}
          />
          <Img
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
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "70%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.2}
          style={{ opacity: 0.15, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "10%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.4}
          speed={-0.1}
          style={{ opacity: 0.25, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "25%", marginLeft: "10%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "85%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.6}
          speed={0.4}
          style={{ opacity: 0.35, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "5%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "15%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={0.8}
          style={{ opacity: 0.075, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "55%" }}
          />
          <Img
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
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "70%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={0.2}
          style={{ opacity: 0.15, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "10%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5.4}
          speed={-0.1}
          style={{ opacity: 0.25, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "25%", marginLeft: "10%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "85%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={6.6}
          speed={0.4}
          style={{ opacity: 0.35, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "5%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "15%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={7}
          speed={0.8}
          style={{ opacity: 0.075, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "55%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={7.8}
          speed={0.5}
          style={{ opacity: 0.075, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "70%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={7}
          speed={0.2}
          style={{ opacity: 0.15, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "10%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={7.4}
          speed={-0.1}
          style={{ opacity: 0.25, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "25%", marginLeft: "10%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "85%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={8.6}
          speed={0.4}
          style={{ opacity: 0.35, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "5%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "15%", marginLeft: "80%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={8.8}
          speed={0.8}
          style={{ opacity: 0.075, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "55%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>
        <Home handleClick={handleClick} />
        <Portfolio />
        <AboutMe />
        <Contact />
      </Parallax>
    </Layout>
  )
}

export default IndexPage

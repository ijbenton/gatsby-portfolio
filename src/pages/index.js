import React, { useRef } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { ParallaxProvider } from "react-scroll-parallax"
import { animated, useSpring } from "react-spring"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import { Keyframes } from "react-spring/renderprops"
import Navbar from "../components/navbar/navbar"

import Layout from "../components/layout"
import Home from "../sections/home/home"
import AboutMe from "../sections/about-me/about-me"
import Portfolio from "../sections/portfolio/portfolio"
import Contact from "../sections/contact/contact"

import Background from "../content/home/stars/stars.jpg"

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// n is number of stars required
const multipleBoxShadow = n => {
  let value = `${getRandomInt(0, 2000)}px ${getRandomInt(0, 2000)}px #FFF`
  for (let i = 0; i < n; i++) {
    value = `${value}, ${getRandomInt(0, 2000)}px ${getRandomInt(
      0,
      2000
    )}px #FFF`
  }
  return value
}

let shadowsSmall = multipleBoxShadow(700)
let shadowsMedium = multipleBoxShadow(200)
let shadowsBig = multipleBoxShadow(100)

console.log(shadowsBig)

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
  &:after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.6;
    background: ${props =>
      props.primary
        ? "var(--primary)"
        : props.secondary
        ? "var(--secondary)"
        : ""};
  }
`

const IndexPage = () => {
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

  console.log(allFile.edges[0].node.childImageSharp.fluid)
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
  let parallax
  const handleClick = (pageNum) => {
    parallax.scrollTo(pageNum)
  }
  return (
    <Layout>
    <Navbar handleClick={handleClick} />
      <Parallax pages={6} ref={ref => (parallax = ref)}>
        <SmallStarsAnimation reset config={{ duration: 50000 }}>
          {styles => <SmallStarsLayer style={styles} />}
        </SmallStarsAnimation>
        <MediumStarsAnimation reset config={{ duration: 100000 }}>
          {styles => <MediumStarsLayer style={styles} />}
        </MediumStarsAnimation>
        <BigStarsAnimation reset config={{ duration: 150000 }}>
          {styles => <BigStarsLayer style={styles} />}
        </BigStarsAnimation>
        <Home handleClick={handleClick}/>
        <Portfolio />
        <ParallaxLayer
          offset={0.99}
          speed={0.8}
          style={{ opacity: 0.1, zIndex: "-3" }}
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
          style={{ opacity: 0.1, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "70%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.99}
          speed={0.2}
          style={{ opacity: 0.2, zIndex: "-3" }}
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
          style={{ opacity: 0.4, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "60%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "25%", marginLeft: "30%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.6}
          speed={0.4}
          style={{ opacity: 0.6, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "5%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0.8}
          style={{ opacity: 0.1, zIndex: "-3" }}
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
          style={{ opacity: 0.1, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "70%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={0.2}
          style={{ opacity: 0.2, zIndex: "-3" }}
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
          style={{ opacity: 0.4, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "60%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "25%", marginLeft: "30%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4.6}
          speed={0.4}
          style={{ opacity: 0.6, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "5%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          speed={0.8}
          style={{ opacity: 0.1, zIndex: "-3" }}
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
          style={{ opacity: 0.1, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "70%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          speed={0.2}
          style={{ opacity: 0.2, zIndex: "-3" }}
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
          style={{ opacity: 0.4, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "60%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "25%", marginLeft: "30%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6.6}
          speed={0.4}
          style={{ opacity: 0.6, zIndex: "-3" }}
        >
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "20%", marginLeft: "5%" }}
          />
          <Img
            fluid={allFile.edges[0].node.childImageSharp.fluid}
            style={{ width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={5.5}
          speed={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <Img
            fluid={allFile.edges[1].node.childImageSharp.fluid}
            style={{ width: "30%" }}
          />
        </ParallaxLayer>
        <StyledParallaxLayer secondary offset={4} speed={1}>
          <AboutMe />
        </StyledParallaxLayer>
        <StyledParallaxLayer primary offset={5} speed={1}>
          <Contact />
        </StyledParallaxLayer>
        {
          //  <ParallaxLayer offset={0}>
          //   <Home />
          // </ParallaxLayer>
          // <ParallaxLayer
          //   offset={1}
          //   speed={1}
          //   style={{ backgroundColor: "#805E73" }}
          // >
          //   <Portfolio />
          // </ParallaxLayer>
          // <ParallaxLayer offset={2}>
          //   <AboutMe />
          // </ParallaxLayer>
          // <ParallaxLayer offset={3}>
          //   <Contact />
          // </ParallaxLayer>
        }
        {
          //   allFile.edges.map(({ node }, i) => {
          //   console.log(node)
          //   return (
          //     <ParallaxLayer
          //       offset={i / 3}
          //       speed={-0.3}
          //       style={{ pointerEvents: "none" }}
          //     >
          //       <Img
          //         fluid={
          //           node.childMarkdownRemark.frontmatter.image.childImageSharp
          //             .fluid
          //         }
          //         style={{
          //           width: "10%",
          //           height: "10%",
          //           marginLeft: node.childMarkdownRemark.frontmatter.bounds + "%",
          //         }}
          //       />
          //     </ParallaxLayer>
          //   )
          // })
        }
        }
        {
          //       <ParallaxLayer offset={0} speed={0.8} style={{ opacity: 0.1 }}>
          //         <img
          //           src={`url("../content/home/dev/dev.png")`}
          //           style={{ display: "block", width: "20%", marginLeft: "55%" }}
          //         />
          //         <img
          //           src={`url("../content/home/dev/dev.png")`}
          //           style={{ display: "block", width: "10%", marginLeft: "15%" }}
          //         />
          //       </ParallaxLayer>
          //       <ParallaxLayer offset={0.75} speed={0.5} style={{ opacity: 0.1 }}>
          //         <img
          //           src={`url("../content/home/dev/dev.png")`}
          //           style={{ display: "block", width: "20%", marginLeft: "70%" }}
          //         />
          //         <img
          //           src={`url("../content/home/dev/dev.png")`}
          //           style={{ display: "block", width: "20%", marginLeft: "40%" }}
          //         />
          //       </ParallaxLayer>
          //       <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 0.2 }}>
          //         <img
          //           src={`url("../content/home/dev/dev.png")`}
          //           style={{ display: "block", width: "10%", marginLeft: "10%" }}
          //         />
          //         <img
          //           src={`url("../content/home/dev/dev.png")`}
          //           style={{ display: "block", width: "20%", marginLeft: "75%" }}
          //         />
          //       </ParallaxLayer>
          //       <ParallaxLayer offset={0.6} speed={-0.1} style={{ opacity: 0.4 }}>
          //         <img
          //           src={`url("../content/home/dev/dev.png")`}
          //           style={{ display: "block", width: "20%", marginLeft: "60%" }}
          //         />
          //         <img
          //           src={`url("../content/home/dev/dev.png")`}
          //           style={{ display: "block", width: "25%", marginLeft: "30%" }}
          //         />
          //         <img
          //           src={`url("../content/home/dev/dev.png")`}
          //           style={{ display: "block", width: "10%", marginLeft: "80%" }}
          //         />
          //       </ParallaxLayer>
          //       <ParallaxLayer offset={1.6} speed={0.4} style={{ opacity: 0.6 }}>
          //         <img
          //           src={`url("../content/home/dev/dev.png")`}
          //           style={{ display: "block", width: "20%", marginLeft: "5%" }}
          //         />
          //         <img
          //           src={`url("../content/home/dev/dev.png")`}
          //           style={{ display: "block", width: "15%", marginLeft: "75%" }}
          //         />
          //       </ParallaxLayer>)
        }
      </Parallax>
    </Layout>
  )
}

export default IndexPage

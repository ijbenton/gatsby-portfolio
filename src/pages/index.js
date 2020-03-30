import React from "react"
import styled from "styled-components"
import { animated, useSpring } from "react-spring"
import { Keyframes } from "react-spring/renderprops"
import Navbar from "../components/navbar/navbar"

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

const IndexPage = () => {
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

  return (
    <Layout>
      {/* React Spring Keyframes Animations */}
      <SmallStarsAnimation reset config={{ duration: 50000 }}>
        {styles => <SmallStarsLayer style={styles} />}
      </SmallStarsAnimation>
      <MediumStarsAnimation reset config={{ duration: 100000 }}>
        {styles => <MediumStarsLayer style={styles} />}
      </MediumStarsAnimation>
      <BigStarsAnimation reset config={{ duration: 150000 }}>
        {styles => <BigStarsLayer style={styles} />}
      </BigStarsAnimation>
      {/* Components */}
      <Navbar />
      <Home />
      <Portfolio />
      <AboutMe />
      <Contact />
    </Layout>
  )
}

export default IndexPage

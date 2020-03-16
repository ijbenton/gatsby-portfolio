import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"

import Layout from "../components/layout"
import Home from "../sections/home/home"
import AboutMe from "../sections/about-me/about-me"
import Portfolio from "../sections/portfolio/portfolio"
import Contact from "../sections/contact/contact"

const IndexPage = () => (
  <ParallaxProvider>
    <Layout>
      <Home />
      <Portfolio />
      <AboutMe />

      <Contact />
    </Layout>
  </ParallaxProvider>
)

export default IndexPage

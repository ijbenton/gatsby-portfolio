const theme = {
  colors: {
    primary: "#05668D",
    primaryLight: "#028090",
    secondary: "#00A896",
    secondaryLight: "#02C39A",
    pTransparent: "rgba(5,102,141, 0.8)",
    plTransparent: "rgba(2,128,144, 0.8)",
    lightTheme: {
      text: "#585858",
      textHighlight: "#313638",
      background: "#FFFFFF",
    },
    darkTheme: {
      text: "#E5E5E5",
      textHighlight: "#F2F2F2",
      background: "#232931",
      card: "#393e46",
    },
  },
  mediaQueries: {
    landscape: `only screen and (max-width: 25em)`,
    smallPhone: "only screen and (max-width: 31.25em)",
    mediumPhone: "only screen and (max-width: 37.5em)",
    largePhone: "only screen and (max-width: 767px)",
    smallDesktop: "only screen and (min-width: 1025px and max-width: 1400px)",
    mediumDesktop: "only screen and (min-width: 1401px and max-width: 1600px)",
    largeDesktop: "only screen and (min-width: 1601px)",
    tablet: "only screen and (max-width: 1024px)",
  },
}

export default theme

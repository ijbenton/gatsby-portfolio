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
      background: "#1b1b1e",
    },
  },
  mediaQueries: {
    smallest: `only screen and (max-width: 25em)`,
    smaller: "only screen and (max-width: 31.25em)",
    small: "only screen and (max-width: 37.5em)",
    medium: "only screen and (max-width: 56.25em)",
    large: "only screen and (max-width: 80em)",
    larger: "only screen and (max-width: 90em)",
    largest: "only screen and (max-width: 97em)",
  },
}

export default theme

import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
html {
  font-size: 10px;
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    width: 10px;
    background: black;
  }
  ::-webkit-scrollbar-thumb {
    background-color: gray;
    height: 10rem;
  }
  * {
    outline: none;
    box-sizing: inherit;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

body {
  font-family: 'Raleway', 'Roboto', 'Arial', 'serif';
  margin: 0;
  width: 100%;
  height: 100%;
  --primary: ${props => props.theme.colors.primary};
  --primary-light: ${props => props.theme.colors.primaryLight};
  --secondary: ${props => props.theme.colors.secondary};
  --secondary-light: ${props => props.theme.colors.secondaryLight};
  --navbar: rgba(255, 255, 255, 0.95);
  --p-transparent: ${props => props.theme.colors.pTransparent};
  --pl-transparent: ${props => props.theme.colors.plTransparent};
  --text: ${props => props.theme.colors.darkTheme.text};
  --text-highlight: ${props => props.theme.colors.darkTheme.textHighlight};
  --background: rgba(35,41,49, 0.95);
  --white: #fff;
  --shadow-btn: rgba(7, 49, 69, .1);
  --shadow-color: rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.colors.darkTheme.background};
  

}
form,
input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
`

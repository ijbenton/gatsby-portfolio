import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
html {
  font-size: 10px;
    box-sizing: border-box;
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
  font-family: 'Raleway', 'sans-serif';
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  --primary: ${props => props.theme.colors.primary};
  --primary-light: ${props => props.theme.colors.light};
  --primary-lighter: ${props => props.theme.colors.lighter};
  --secondary: ${props => props.theme.colors.secondary};
  --navbar: rgba(255, 255, 255, 0.95);
  --box-1: ${props => props.theme.colors.box1};
  --box-2: ${props => props.theme.colors.box2};
  --text: ${props => props.theme.colors.darkTheme.text};
  --text-highlight: ${props => props.theme.colors.darkTheme.textHighlight};
  --background: rgba(27,27,30, 0.9);
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

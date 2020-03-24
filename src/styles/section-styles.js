import styled from "styled-components"

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  max-width: 124rem;
  border-bottom: 1px solid black;
  padding-top: 60px;
  margin: 0 auto;

  background: ${props =>
    props.pTransparent
      ? "var(--p-transparent)"
      : props.plTransparent
      ? "var(--pl-transparent)"
      : ""};
`

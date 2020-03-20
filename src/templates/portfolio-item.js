import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import ButtonLink from "../components/button-link/button-link"

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 5;
  margin-bottom: 8rem;

  &:first-child {
    margin-top: 60px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`

const Content = styled.div`
  display: flex;
  flex: 1 1 50%;
  flex-direction: column;
  margin: 0 2rem;
`

const ButtonsWrapper = styled.div`
  display: flex;

  & a:first-of-type {
    margin-right: 2rem;
  }
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 3.5rem;
  position: relative;
  font-style: italic;
  margin: 0;
  margin-bottom: 3.5rem;
  color: white;
  transition: color 0.2s ease-out;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  background: var(--primary);

  /* &:after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    background: var(--primary);
  } */
`

const Stack = styled.span`
  color: var(--text-highlight);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.15vw;
  font-family: "Roboto";
  margin-bottom: 4rem;
`

const Text = styled.div`
  color: var(--text);
  p {
    font-size: 1vw;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 3.7rem;
    line-height: 1.75;
    letter-spacing: 1.5px;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: inherit;
  margin-right: 0.5rem;
`

const Image = styled(Img)`
  margin: 0 2rem;
  flex: 1 1 50%;
  z-index: 5;
`

const PortfolioItem = ({ node }) => {
  const {
    title,
    live,
    source,
    stack,
    image,
  } = node.childMarkdownRemark.frontmatter
  return (
    <ItemWrapper>
      <Title>{title}</Title>
      <ContentWrapper>
        <Image fluid={image.childImageSharp.fluid} />
        <Content>
          <Text
            dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }}
          />
          <Stack>{stack}</Stack>
          <ButtonsWrapper>
            <ButtonLink target="_blank" solid href={live} rel="noreferrer">
              <StyledIcon icon={faLink} />
              Visit
            </ButtonLink>
            <ButtonLink target="_blank" href={source} rel="noreferrer">
              <StyledIcon icon={faGithub} />
              Source
            </ButtonLink>
          </ButtonsWrapper>
        </Content>
      </ContentWrapper>
    </ItemWrapper>
  )
}

export default PortfolioItem

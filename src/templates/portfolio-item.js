import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Lead } from "../styles/section-styles"

import ButtonLink from "../components/button-link/button-link"

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  padding: 0 0 12rem 0;
  height: 80vh;

  &:first-child {
    margin-top: 60px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  @media ${props => props.theme.mediaQueries.tablet} {
    flex-direction: column;
    margin: 0 4rem;
  }
`

const Content = styled.div`
  display: flex;
  flex: 1 1 50%;
  flex-direction: column;

  @media ${props => props.theme.mediaQueries.tablet} {
    flex: 0 0 auto;
    width: 100%;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;

  & a:first-of-type {
    margin-right: 2rem;
  }

  @media ${props => props.theme.mediaQueries.tablet} {
    justify-content: center;
  }
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 3.5rem;
  position: relative;
  font-style: italic;
  margin: 0;
  margin-bottom: 3.5rem;
  color: var(--text-highlight);
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  background: var(--primary);
`

const Stack = styled.span`
  color: var(--text-highlight);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.75rem;
  font-family: "Roboto";
  margin-bottom: 4rem;

  @media ${props => props.theme.mediaQueries.tablet} {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: inherit;
  margin-right: 0.5rem;
`

const Image = styled(Img)`
  margin-right: 4rem;
  flex: 1 1 50%;
  z-index: 5;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #222);

  @media ${props => props.theme.mediaQueries.tablet} {
    flex: 0 0 auto;
    width: 100%;
    margin: 0;
  }
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
          <Lead
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

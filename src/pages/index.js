import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.div`
  color: white;
  font-family: 'Time', 'Times', serif;
  font-weight: 300 !important;
  letter-spacing: 1px;
  max-width: 510px;
  font-size: 2.612rem;
  margin: 2%;

  position: relative;
  line-height: 1.3;

  p {
    margin: 3rem 0;
  }

  a {
    color: white;
    opacity: 1;
    font-style: italic;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      opacity: 1;
    }
  }

`

const SocialBox = styled.div`
  border: 1.1px solid white;
  padding: 0.5rem 2rem 1.3rem;
  display: inline-block;
  margin-top: 1rem;
`

const Title = styled.h1`
  font-weight: 400;
  font-size: 2.6rem;

  span {

  }
`

const SocialLink = styled.a`
  padding: 0 2rem;

  font-size: 1.6rem;

`

const IndexPage = () => (
  <Container>

    <Title>Hunter Caron — <span>Designer</span></Title>
    <p>Hey there, I’m currently working hard designing some <a href="https://twitter.com/huntercaron/status/922627031166103553" target="_blank">new stuff</a>.</p>

    <p>Previously I've worked <a href="http://facebook.design/" target="_blank">@facebook</a>, <a href="https://www.format.com/" target="_blank">@format</a> & <a href="https://www.konradgroup.com/" target="_blank">@konradgroup</a>.</p>

    <p>Soon I'm going back to designing stuff <a href="http://facebook.design/" target="_blank">@facebook</a> on <a href="http://messenger.com" target="_blank">@messenger</a>.</p>

    <p>Wanna work on something together? <br/> <a href="mailto:huntercaron.design@icloud.com" target="_blank">Let's Talk &rarr;</a></p>

    <SocialBox>
      <SocialLink href="https://twitter.com/huntercaron" target="_blank">[Twitter]</SocialLink>
      <SocialLink href="https://www.instagram.com/hunterhcaron/" target="_blank">[Instagram]</SocialLink>
    </SocialBox>

  </Container>
)

export default IndexPage

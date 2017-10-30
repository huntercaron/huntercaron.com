import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.div`
  color: white;
  font-family: Courier, monospace;
  letter-spacing: 1px;
  max-width: 480px;
  font-size: 1.4rem;
  transform: rotateX(-4deg) rotateY(-22deg) rotateZ(-2deg);

  position: relative;

  p {
    margin: 2rem 0;
  }

  a {
    color: white;
    opacity: 0.9;

    &:hover {
      font-style: italic;
      opacity: 1;
    }
  }

`

const SocialBox = styled.div`
  border: 1.5px solid white;
  padding: 1rem 2rem 1.3rem;
  display: inline-block;
  margin-top: 1rem;
`

const Title = styled.h1`
  font-weight: 400;
  font-size: 1.4rem;
  margin-left: 4rem;
`

const SocialLink = styled.a`
  padding: 0 1.5rem;
`

const Gradient = styled.div`
  width: 140%;
  height: 140%;
  position: absolute;
  background-color: pink;
  pointer-events: none;
  top: -30%;
  left: -30%;
  z-index: 2;
  background: radial-gradient(transparent 0%, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,1) 100%);
`

const IndexPage = () => (
  <Container>
    <Gradient/>

    <Title>Hunter Caron — Designer</Title>
    <p>Hey there, I’m currently working hard designing some new stuff. <a href="https://twitter.com/huntercaron/status/922627031166103553" target="_blank">Here</a> is a sneak peek.</p>

    <p>Previously I've worked <a href="http://facebook.design/" target="_blank">@facebook</a>, <a href="https://www.format.com/" target="_blank">@format</a> & <a href="https://www.konradgroup.com/" target="_blank">@konradgroup</a>.</p>

    <p>Soon I'm going back to designing stuff <a href="http://facebook.design/" target="_blank">@facebook</a>.</p>

    <p>Wanna work on something together? <a href="mailto:huntercaron.design@icloud.com" target="_blank">Let's Talk &rarr;</a></p>

    <SocialBox>
      <SocialLink href="https://twitter.com/huntercaron" target="_blank">[Twitter]</SocialLink>
      <SocialLink href="https://www.instagram.com/hunterhcaron/" target="_blank">[Instagram]</SocialLink>
    </SocialBox>

  </Container>
)

export default IndexPage

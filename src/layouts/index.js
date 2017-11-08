import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import  styled, { injectGlobal } from 'styled-components'

import './index.css'


import TimesMedium from "../assets/fonts/TimesMedium.woff"
import TimesMedium2 from "../assets/fonts/TimesMedium.woff2"
import TimesMediumItalic from "../assets/fonts/TimesMediumItalic.woff"
import TimesMediumItalic2 from "../assets/fonts/TimesMediumItalic.woff2"

const Header = () => (
  <div>
  </div>
)

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`

const Wrapper = styled.div`

`

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet
      title="Hunter Caron: Designer"
      meta={[
        { name: 'description', content: 'Hunter Caron is a Toronto based designer &amp; developer who is passionate about creating efficent and dynamic digital experiences for everyone to enjoy.' },
        { name: 'keywords', content: 'designer design developer hunter caron huntercaron hunterhcaron' },
        { name: 'author', content: 'Hunter Caron'}
      ]}
    />

    <Container>
      {children()}
    </Container>
  </Wrapper>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

injectGlobal`

  @font-face {
    font-family: 'Time';
    src: url(${TimesMedium}) format('woff2'),
      url(${TimesMedium2}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Time';
    src: url(${TimesMediumItalic}) format('woff2'),
      url(${TimesMediumItalic2}) format('woff');
    font-weight: normal;
    font-style: italic;
  }

`

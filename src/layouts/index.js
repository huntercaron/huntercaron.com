import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"

import ModeratBold from "../assets/fonts/Moderat-Bold.woff"
import ModeratBold2 from "../assets/fonts/Moderat-Bold.woff2"
import ModeratRegular from "../assets/fonts/Moderat-Regular.woff"
import ModeratRegular2 from "../assets/fonts/Moderat-Regular.woff2"
import ModeratMedium from "../assets/fonts/Moderat-Medium.woff"
import ModeratMedium2 from "../assets/fonts/Moderat-Medium.woff2"
import ModeratMono from "../assets/fonts/Moderat-Mono-Regular.woff"
import ModeratMono2 from "../assets/fonts/Moderat-Mono-Regular.woff2"

const TemplateWrapper = ({ children }) => (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Hunter Caron</title>
            <meta
                name="description"
                content="Hunter Caron is a Toronto based designer &amp; developer who is passionate about creating efficent and dynamic digital experiences for everyone to enjoy"
            />
            <meta
                name="keywords"
                content="designer design developer hunter caron huntercaron hunterhcaron"
            />
            <meta name="author" content="Hunter Caron" />
        </Helmet>

        <GlobalStyle />
        {children}
    </>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper

const GlobalStyle = createGlobalStyle`

  *, *:before, *:after {
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
  }

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
      margin: 0;

      height: 100%;
      font-size: 1.6em;
      line-height: 1.6;
      font-weight: 400;
      font-family: sans-serif;
      color: #222;
      webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
  }


  @font-face {
    font-family: 'Mod';
    src: url(${ModeratBold}) format('woff2'),
      url(${ModeratBold2}) format('woff');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Mod';
    src: url(${ModeratRegular}) format('woff2'),
      url(${ModeratRegular2}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Mod';
    src: url(${ModeratMedium}) format('woff2'),
      url(${ModeratMedium2}) format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Mod-Mono';
    src: url(${ModeratMono}) format('woff2'),
      url(${ModeratMono2}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

`

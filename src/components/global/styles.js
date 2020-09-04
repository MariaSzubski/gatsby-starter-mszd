import { css, createGlobalStyle } from "styled-components"

import { fonts, colors, screen } from "./vars"
import normalize from "./ref/normalize"

const global_styles = css`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    color: ${colors.black};
    font-family: ${fonts.nunito};
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    background: white;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-size: 21px;
    font-size: 2.1rem;
  }

  a {
    color: blue;
    &:hover {
      text-decoration: underline;
    }
  }

  img,
  svg {
    display: inline-block;
    vertical-align: middle;
  }

  ul,
  li {
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0rem;
  }

  hgroup {
    margin-bottom: 1.25em;
  }

  h1 {
    font-size: 5.6rem;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
    text-align: center;
  }

  h3 {
    font-size: 3.6rem;
    text-align: left;
  }

  h4 {
    font-size: 2.2rem;
  }

  h5 {
    font-size: 1.5rem;
    text-align: center;
  }

  h6,
  .h6 {
    font-size: 1.3rem;
  }

  p {
    margin: 0;
    margin-bottom: 2.8rem;
  }

  .background {
    background-color: black;
    color: white;
    box-shadow: 0px 0.4rem 1rem rgba(0, 0, 20, 0.2);
  }

  *.space-lg {
    margin: 12rem 0rem;
    :first-of-type {
      margin: 6rem 0rem;
    }
  }

  *.space-sm {
    margin: 4rem 0rem;
    :first-of-type {
      margin: 2rem 0rem;
    }
  }

  *.text-xs,
  *.text-xs * {
    font-size: 1.3rem;
  }

  *.text-sm,
  *.text-sm * {
    font-size: 1.7rem;
  }

  *.text-md,
  *.text-md * {
    font-size: 2.1rem;
  }

  .highlighted p:first-of-type,
  *.text-lg,
  .highlighted p:first-of-type,
  *.text-lg * {
    font-size: 3rem;
  }

  *.text-light,
  *.text-light * {
    color: ${colors.gray700};
  }

  *.text-center,
  *.text-center * {
    text-align: center;
  }

  @media ${screen.max.md} {
    body {
      font-size: 1.6rem;
    }

    h1 {
      font-size: 4.8rem;
    }

    .highlighted p:first-of-type,
    *.text-lg,
    .highlighted p:first-of-type,
    *.text-lg * {
      font-size: 2.3rem;
    }
  }
`
const all_styles = css`
  ${normalize}
  ${global_styles}
`

const GlobalStyles = createGlobalStyle`${all_styles}`

export default GlobalStyles

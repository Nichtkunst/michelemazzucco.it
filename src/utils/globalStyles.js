import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import { colors, fonts, media } from './commonStyles'

injectGlobal`
  ${reset}
  html,
  body {
    height: 100%;
    font-size: 16px;
    ${media.xl`
      font-size: 14px;
    `}
  }

  body {
    background: ${colors.blue900};
    color: #FFF;
    font-family: ${fonts.sansSerif};
    backface-visibility: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
    line-height: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    line-height: 1.4em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: auto;
  }

  ::selection {
    color: ${colors.yellow500};
    background: transparent;
  }
`

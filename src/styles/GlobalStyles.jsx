import { createGlobalStyle } from 'styled-components'
import React from 'react'

import { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  html {
    font-size: 14px;
  }

  @media (min-width: ${theme`screens.md`}) {
    html {
      font-size: 16px;
    }
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles

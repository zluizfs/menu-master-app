import { createGlobalStyle } from 'styled-components'

import { media } from '@menu-master-app/styles/media-query'

export const GlobalStyles = createGlobalStyle`

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
    }
      
  body {
    background: ${({ theme }) => theme.colors.background_80};
    color: ${({ theme }) => theme.colors.base_100};
    font-family: ${({ theme }) => theme.fonts.ralewayVariable};
    font-weight: 400;
  
    ${media.md`
      font-size: 87.5%;
    `}

   
  }
`

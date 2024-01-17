import { createGlobalStyle } from 'styled-components'
import { PhilosopherBold, RalewayVariable } from '../../public'
import { media } from '@menu-master-app/styles/media-query'

export const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'Philosopher Bold';
      src: url(${PhilosopherBold});
    }

    @font-face {
      font-family: 'Raleway Variable';
      src: url(${RalewayVariable});
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
      }
      
    body {
      background: ${({ theme }) => theme.colors.background_80};
      color: ${({ theme }) => theme.colors.base_100}
    
      ${media.md`
		    font-size: 87.5%;
      `}

      ${media.lg`
        font-size: 73.75%;
      `}
    }
`

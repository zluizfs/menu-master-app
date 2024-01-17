import 'styled-components'
import { DefaultTheme } from '@menu-master-app/styles/themes/default'

type ThemeTemplate = typeof DefaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTemplate {}
}

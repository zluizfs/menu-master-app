import { BreakpointsEnum } from '@menu-master-app/@types'
import { CSSProp, css } from 'styled-components'

const device = {
	xs: `(min-width: ${BreakpointsEnum.xs}px)`,
	sm: `(min-width: ${BreakpointsEnum.sm}px)`,
	md: `(min-width: ${BreakpointsEnum.md}px)`,
	lg: `(min-width: ${BreakpointsEnum.lg}px)`,
	xl: `(min-width: ${BreakpointsEnum.xl}px)`,
	xxl: `(min-width: ${BreakpointsEnum.xxl}px)`,
	max_xs: `(max-width: ${BreakpointsEnum.xs}px)`,
	max_sm: `(max-width: ${BreakpointsEnum.sm}px)`,
	max_md: `(max-width: ${BreakpointsEnum.md}px)`,
	max_lg: `(max-width: ${BreakpointsEnum.lg}px)`,
	max_xl: `(max-width: ${BreakpointsEnum.xl}px)`,
	max_xxl: `(max-width: ${BreakpointsEnum.xxl}px)`,
}

type Media = {
  [key in keyof typeof device]: (...args: Parameters<typeof css>) => CSSProp
}

export const media = Object.entries(device).reduce<Media>((acc, [key, value]) => {
	acc[key as keyof Media] = (...args) => css`
    @media (${value}) {
      ${css(...args)};
    }
  `

	return acc
}, {} as Media)

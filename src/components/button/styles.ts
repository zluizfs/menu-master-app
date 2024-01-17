import styled, { css } from 'styled-components'
import { ButtonComponentStyleVariants } from './types'
import Link from 'next/link'

const ButtonComponentVariants = {
	variants: {
		outlined: css`
      background: none;
      border: 1px solid ${({ theme }) => theme.colors.primary_100};
      color: ${({ theme }) => theme.colors.primary_100};
    `
	},
	fullWidth: css`
    width: 100%;
  `
}

export const ButtonStyled = styled.button<ButtonComponentStyleVariants>`
  all: unset;
  width: 15rem;
  height: 2.063rem;
  border-radius: 4.688rem;

  background: ${({ theme }) => theme.colors.primary_100};

  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  text-align: center;

  cursor: pointer;

  transition: 300ms opacity;

  &:hover {
    opacity: 0.8;
  }

  ${({ variants }) => variants && ButtonComponentVariants.variants[variants]}
  ${({ fullWidth }) => fullWidth && ButtonComponentVariants.fullWidth}
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
`
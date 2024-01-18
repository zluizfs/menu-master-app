import styled, { css } from 'styled-components'
import { ButtonComponentStyleVariants } from './types'
import Link from 'next/link'

const ButtonComponentVariants = {
	variants: {
		outlined: css`
      background: none;
      border: 1px solid ${({ theme }) => theme.colors.primary_100};
      color: ${({ theme }) => theme.colors.primary_100};
    `,
	},
	color: {
		white: css`
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.base_100};
    `,
	},
	size: {
		small: css`
      font-size: 0.8rem;
      height: 1.563rem;
    `,
		medium: css`
      height: 2.063rem;
    `,
		large: css`
      font-size: 1rem;
      height: 2.563rem;
    `,
	},
	fullWidth: css`
    width: 100%;
  `,
}

export const ButtonStyled = styled.button<ButtonComponentStyleVariants>`
  all: unset;
  width: 10rem;
  height: 2.063rem;
  border-radius: 0.188rem;

  background: ${({ theme }) => theme.colors.primary_100};

  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  cursor: pointer;

  transition: 300ms opacity;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.base_40};
    cursor: not-allowed;

    &:hover {
      opacity: 1;
    }
  }

  ${({ $variants }) => $variants && ButtonComponentVariants.variants[$variants]}
  ${({ $color }) => $color && ButtonComponentVariants.color[$color]}
  ${({ $size }) => $size && ButtonComponentVariants.size[$size]}
  ${({ $fullWidth }) => $fullWidth && ButtonComponentVariants.fullWidth}
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
`

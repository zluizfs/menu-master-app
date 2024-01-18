'use client'

import styled, { css } from 'styled-components'

import { TextInputStylesProps, WrapperStylesProps } from './types'

export const WrapperVariants = {
	fullWidth: css`
    width: 100% !important;
  `,
}

export const Wrapper = styled.div<WrapperStylesProps>`
  display: inline-flex;
  background: transparent;
  gap: ${({ theme }) => theme.space[0]};
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  ${({ $fullWidth }) => $fullWidth && WrapperVariants.fullWidth}
`

export const TextInputVariants = {
	error: css`
    && {
      &,
      &::placeholder {
        color: ${({ theme }) => theme.colors.error_100};
      }

      border-color: ${({ theme }) => theme.colors.error_100};

      &:hover,
      &:focus {
        border-color: ${({ theme }) => theme.colors.error_60};
      }
    }
  `,
	fullWidth: css`
    width: 100% !important;
  `,
}

export const TextInput = styled.input<TextInputStylesProps>`
  width: 18.875rem;
  height: 2.563rem;
  border-radius: 0.188rem;

  padding: 1rem;

  outline: none;

  border: 1px solid ${({ theme }) => theme.colors.base_20};

  &::placeholder {
    color: ${({ theme }) => theme.colors.base_40};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.base_80};
    border-color: ${({ theme }) => theme.colors.base_80};
  }

  &:disabled {
    border-color: ${({ theme }) => theme.colors.base_40};
    color: ${({ theme }) => theme.colors.base_40};
  }

  ${({ $error }) => $error && TextInputVariants.error}
  ${({ $fullWidth }) => $fullWidth && WrapperVariants.fullWidth}
`

export const ErrorMessage = styled.span`
  font-family: ${({ theme }) => theme.fonts.ralewayVariable};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.error_100};
`

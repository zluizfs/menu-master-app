'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'

import styled, { css, keyframes } from 'styled-components'

const overlayShow = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const contentShow = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`

export const StyledOverlay = styled(DialogPrimitive.Overlay)`
  background-color: ${({ theme }) => theme.colors.base_60};
  position: fixed;
  inset: 0;
  z-index: 9998;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`

export const StyledContent = styled(DialogPrimitive.Content)`
  z-index: 9999;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  overflow: auto;
  padding: ${({ theme }) => theme.space[4]};

  @media (prefers-reduced-motion: no-preference) {
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.base_10};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.base_20};
  }
`
export const StyledContentVariants = {
	fullscreen: {
		true: css`
      width: 100%;
      max-width: 100%;
      height: 100vh;
      max-height: 100%;
      border-radius: 0;
    `,
	},
}
export const StyledTitle = styled(DialogPrimitive.Title)`
  margin: 0;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.base_100};
  font-size: 1.5rem;
`

export const StyledDescription = styled(DialogPrimitive.Description)`
  margin: 2 0 4;
  color: ${({ theme }) => theme.colors.base_80};
  line-height: 1.5;
`

export const CloseButton = styled.button`
  all: unset;
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.base_80};
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.base_20};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.base_10};
  }
`

'use client'

import styled from 'styled-components'

import * as AvatarPrimitive from '@radix-ui/react-avatar'

export const AvatarRoot = styled(AvatarPrimitive.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: 40px;
  height: 40px;
  border-radius: 100%;

`

export const AvatarFallback = styled(AvatarPrimitive.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary_100};
  color: ${({ theme }) => theme.colors.white}; 
  font-size: 1rem;
  font-weight: 600;
`
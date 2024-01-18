'use client'

import { media } from '@menu-master-app/styles/media-query'
import styled from 'styled-components'

export const NavbarWrapper = styled.div`
  width: 100%;
  padding: 1rem;

  background: ${({ theme }) => theme.colors.white};
`

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;

  ${media.md`
    flex-direction: row;
    justify-content: space-between;,
    align-items: center;
    gap: none;
  `}
`

export const AvatarWrapper = styled.div`
  display: none;

  ${media.md`
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `}
`

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

export const LogoutText = styled.span`
  color: ${({ theme }) => theme.colors.error_100};
  cursor: pointer;
`

'use client'

import { media } from '@menu-master-app/styles/media-query'
import styled from 'styled-components'

export const AddressWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
`

export const AddressLocalizationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

export const Address = styled.span``

export const City = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.base_80};
`
export const AvatarWrapper = styled.div`
  display: none;

  ${media.md`
    display: block;
  `}
`

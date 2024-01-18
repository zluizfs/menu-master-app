'use client'

import { media } from '@menu-master-app/styles/media-query'
import styled from 'styled-components'

export const Username = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
`

export const CategoryTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;

  margin-bottom: 0.3rem;
`

export const RestaurantsWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const InputWrapper = styled.div`
  width: 100;
  display: flex;
  justify-content: flex-end;

  ${media.md`
    div {
      max-width: 20rem;
    }
  `}
`


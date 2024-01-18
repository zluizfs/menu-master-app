'use client'

import { media } from '@menu-master-app/styles/media-query'
import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;

  ${media.sm`
    max-width: 33.75rem;
  `}

  ${media.md`
    max-width: 45rem;
  `}

  ${media.lg`
    max-width: 60rem;
  `}

  ${media.xl`
    max-width: 71.25rem;
  `}

  ${media.xxl`
    max-width: 82.5rem;
  `}
`

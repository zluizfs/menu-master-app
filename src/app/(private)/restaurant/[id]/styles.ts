'use client'

import { media } from '@menu-master-app/styles/media-query'
import Image from 'next/image'
import styled from 'styled-components'

export const RestaurantWrapper = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  ${media.md`
    flex-direction: row;
  `}
`

export const RestaurantImageWrapper = styled.div`
  position: relative;

  width: 10rem;
  height: 10rem;

`

export const RestaurantImage = styled(Image)`
  object-fit: cover;

  border-radius: 100%;
`

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  ${media.md`
    align-items: start;
  `}
`

export const ContactInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  ${media.sm`
    flex-direction: row;
    align-items: start;
  `}
`

export const RestaurantInfoWithIconWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
`

export const RestaurantInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;

  margin-bottom: 0.5rem;

  ${media.md`
    align-items: start;
  `}
`

export const RestaurantTitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
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

export const DishesWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`
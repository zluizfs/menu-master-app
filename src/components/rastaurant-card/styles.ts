'use client'

import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.base_100}
`

export const RestaurantCardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  padding: 2rem;
  border-radius: 0.188rem;

  cursor: pointer;
`

export const RestaurantCardImageWrapper = styled.div`
  position: relative;

  width: 6rem;
  height: 6rem;

`

export const RestaurantCardImage = styled(Image)`
  object-fit: cover;

  border-radius: 100%;
`


export const RestaurantInfoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;

`

export const RestaurantTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
`

export const RestaurantRatingWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
`
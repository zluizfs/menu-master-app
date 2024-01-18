'use client'

import Image from 'next/image'
import styled from 'styled-components'

const BORDER_SIZE = '0.188rem'

export const DisheCardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;

  border-radius: ${BORDER_SIZE};

  cursor: pointer;
`

export const DisheCardImageWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 8rem;
`

export const DisheDialogImageWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 14rem;
`

export const DisheCardImage = styled(Image)`
  object-fit: cover;

  border-top-right-radius: ${BORDER_SIZE};
  border-top-left-radius: ${BORDER_SIZE};
`

export const DisheDialogImage = styled(Image)`
  object-fit: cover;

  border-radius: ${BORDER_SIZE};
`

export const DisheInfoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  padding: 1rem;
`

export const DisheInfoDialogWrapper = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`


export const DisheTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
`

export const DishesPrice = styled.span`
  color: ${({ theme }) => theme.colors.primary_100};
  font-size: 1.5rem;

  margin-top: 0.3rem;
`
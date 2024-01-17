'use client'

import { media } from '@menu-master-app/styles/media-query'
import styled from 'styled-components'

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
`
export const ImageWrapper = styled.div`
  display: none;

  ${media.md`
    display: block;
    position: relative;
    width: 50%;
    height: 100%;
  `}

  ${media.lg`
    width: 50%;
  `}
`

export const ImageOverlay = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  z-index: 2;

  background: ${({ theme }) => theme.colors.base_40};
`

export const FormWrapper = styled.div`
  width: 100%;

  padding: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.md`
    width: 50%;
  `}
`

export const ContentWrapper = styled.div`
  width: 100%;

  ${media.xxl`
    max-width: 70%;
  `}
`

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
`

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  padding: 1.5rem 0;
`

export const WelcomeText = styled.h2`
  font-weight: 500;
`

export const WelcomeDescription = styled.p`
  color: ${({ theme }) => theme.colors.base_80};
`

export const ButtonWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

export const RegisterText = styled.p`
  a {
    text-decoration: none;

    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary_100};
  }
`


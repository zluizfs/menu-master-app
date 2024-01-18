'use client'

import {
	AuthForm,
	ButtonWrapper,
	RegisterText,
	WelcomeDescription,
	WelcomeText,
	WelcomeWrapper,
} from './styles'
import { useForm } from 'react-hook-form'
import { Button, InputControlled } from '@menu-master-app/components'
import { AuthenticationFields } from './types'
import Link from 'next/link'
import { AuthService } from '@menu-master-app/services/menu-master/requests/auth'
import { useAuth } from '@menu-master-app/store'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { yupResolver } from '@hookform/resolvers/yup'
import { userAuthValidation } from '@menu-master-app/configs/yup/auth'

export default function Auth() {
	const { push } = useRouter()

	const { authenticate } = useAuth()

	const {
		control,
		formState: { errors },
		handleSubmit,
	} = useForm<AuthenticationFields>({
		resolver: yupResolver<AuthenticationFields>(userAuthValidation),
	})

	const [isSignIn, setIsSignIn] = useState(false)

	async function onSubmit(data: AuthenticationFields) {
		setIsSignIn(true)

		await AuthService.authentication({
			...data,
		}).then(({ data }) => {
			authenticate({
				name: data.user.name,
				addresses: data.user.addresses,
				token: data.token,
			})

			push('/dashboard')
		})

		setIsSignIn(false)
	}

	return (
		<>
			<WelcomeWrapper>
				<WelcomeText>Bem-vindo</WelcomeText>
				<WelcomeDescription>
          Insira as suas credenciais abaixo para entrar.
				</WelcomeDescription>
			</WelcomeWrapper>

			<AuthForm>
				<InputControlled
					name="email"
					control={control}
					placeholder="E-mail"
					errorMessage={errors.email?.message}
					$fullWidth
				/>
				<InputControlled
					name="password"
					control={control}
					placeholder="Senha"
					type="password"
					errorMessage={errors.password?.message}
					$fullWidth
				/>

				<ButtonWrapper>
					<Button
						onClick={handleSubmit(onSubmit)}
						$fullWidth
						disabled={isSignIn}
					>
						{isSignIn ? 'Entrando...' : 'Entrar'}
					</Button>
				</ButtonWrapper>
			</AuthForm>

			<RegisterText>
        Novo por aqui? <Link href="/register">Registre-se</Link>
			</RegisterText>
		</>
	)
}

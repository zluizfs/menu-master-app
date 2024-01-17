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

export default function Auth() {
	const { authenticate } = useAuth()

	const { control, handleSubmit } = useForm<AuthenticationFields>()

	async function onSubmit(data: AuthenticationFields) {
		await AuthService.authentication({
			...data
		}).then((res) => {
			authenticate({
				token: res.data.token
			})
		})
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
					fullWidth
				/>
				<InputControlled
					name="password"
					control={control}
					placeholder="Senha"
					fullWidth
				/>

				<ButtonWrapper>
					<Button onClick={handleSubmit(onSubmit)} fullWidth>Entrar</Button>
				</ButtonWrapper>
			</AuthForm>

			<RegisterText>
        Novo por aqui? <Link href="/register">Registre-se</Link>
			</RegisterText>
		</>
	)
}

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

export default function Auth() {
	const { control } = useForm<AuthenticationFields>({})

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
					<Button fullWidth>Entrar</Button>
				</ButtonWrapper>
			</AuthForm>

			<RegisterText>
        Novo por aqui? <Link href="/register">Registre-se</Link>
			</RegisterText>
		</>
	)
}

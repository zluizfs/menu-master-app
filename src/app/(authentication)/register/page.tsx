'use client'

import { Button, InputControlled } from '@menu-master-app/components'
import {
	AuthForm,
	ButtonWrapper,
	RegisterText,
	WelcomeDescription,
	WelcomeText,
	WelcomeWrapper,
} from '../styles'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Link from 'next/link'

const StepTexts = {
	0: 'Etapa 1 - Informações Pessoais',
	1: 'Etapa 2 - Endereço',
}

export default function Register() {
	const [step, setStep] = useState(0)

	const { control } = useForm({})

	function handleNextStep() {
		setStep((prev) => prev + 1)
	}

	function handlePrevStep() {
		setStep((prev) => prev - 1)
	}

	return (
		<>
			<WelcomeWrapper>
				<WelcomeText>{StepTexts[step as keyof typeof StepTexts]}</WelcomeText>
				<WelcomeDescription>
          Insira as informações abaixo para efetuar o cadastro na plataforma.
				</WelcomeDescription>
			</WelcomeWrapper>

			<AuthForm>
				{step === 0 && (
					<>
						<InputControlled
							name="email"
							control={control}
							placeholder="Nome Completo"
							fullWidth
						/>
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
						<InputControlled
							name="password"
							control={control}
							placeholder="Confirme a senha"
							fullWidth
						/>
						<InputControlled
							name="password"
							control={control}
							placeholder="Celular"
							fullWidth
						/>
					</>
				)}

				{step === 1 && (
					<>
						<InputControlled
							name="password"
							control={control}
							placeholder="Rua"
							fullWidth
						/>
						<InputControlled
							name="password"
							control={control}
							placeholder="Número"
							fullWidth
						/>
						<InputControlled
							name="password"
							control={control}
							placeholder="Bairro"
							fullWidth
						/>
						<InputControlled
							name="password"
							control={control}
							placeholder="Cidade"
							fullWidth
						/>
						<InputControlled
							name="password"
							control={control}
							placeholder="Estado"
							fullWidth
						/>
						<InputControlled
							name="password"
							control={control}
							placeholder="Complemento"
							fullWidth
						/>
						<InputControlled
							name="password"
							control={control}
							placeholder="Ponto de Referencia"
							fullWidth
						/>
					</>
				)}

				<ButtonWrapper>
					<Button type="button" onClick={handleNextStep} fullWidth>
						{step === 0 ? 'Avançar' : 'Cadastrar'}
					</Button>
					{step === 1 && (
						<Button variants="outlined" onClick={handlePrevStep} fullWidth>
              Voltar
						</Button>
					)}
				</ButtonWrapper>
			</AuthForm>

			{step === 0 && (
				<RegisterText>
          Já possui uma conta? <Link href="/">Faça o Login</Link>
				</RegisterText>
			)}
		</>
	)
}

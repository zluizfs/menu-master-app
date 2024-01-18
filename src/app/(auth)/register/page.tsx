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

import { UserRegisterFields } from './types'
import { ViaCepService } from '@menu-master-app/services/via-cep/requests'
import { toast } from 'react-toastify'
import { AuthService } from '@menu-master-app/services/menu-master/requests/auth'
import { cleanStringOfNumbers } from '@menu-master-app/util/formatting'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'

import { userValidation } from '@menu-master-app/configs/yup/auth'
import { yupResolver } from '@hookform/resolvers/yup'

const StepTexts = {
	0: 'Etapa 1 - Informações Pessoais',
	1: 'Etapa 2 - Endereço',
}

export default function Register() {
	const { push } = useRouter()

	const [step, setStep] = useState(0)

	const {
		control,
		handleSubmit,
		formState: { errors },
		watch,
		setError,
		setValue,
	} = useForm<UserRegisterFields>({
		resolver: yupResolver<UserRegisterFields>(userValidation),
	})

	function handleNextStep() {
		setStep((prev) => prev + 1)
	}

	function handlePrevStep() {
		setStep((prev) => prev - 1)
	}

	async function searchCep() {
		const cep = watch('cep')
		await ViaCepService.findCep(cep).then(({ data }) => {
			if (data.erro) {
				toast('CEP não encontrado!', { type: 'error' })
				return
			}

			setValue('street', data.logradouro)
			setValue('neighborhood', data.bairro)
			setValue('city', data.localidade)
			setValue('state', data.uf)
		})
	}

	async function onSubmit(data: UserRegisterFields) {
		if (!data.password.includes(data.confirmPassword)) {
			setError('password', { message: 'Senhas precisam ser iguais!' })
			setError('confirmPassword', { message: 'Senhas precisam ser iguais!' })
		}

		await AuthService.register({
			email: data.email,
			number: Number(data.number),
			name: data.name,
			password: data.password,
			state: data.state,
			street: data.street,
			city: data.city,
			complement: data.complement || '',
			landmark: data.landmark || '',
			neighborhood: data.neighborhood,
			phoneNumber: cleanStringOfNumbers(data.phoneNumber),
		})
			.then(() => {
				toast(
					'Cadastro realizado com sucesso, realize o login com as suas credenciais!',
					{ type: 'success' }
				)
				push('/')
			})
			.catch((data: AxiosError) =>
				toast(`Occoreu um erro ao realizar o cadastro: ${data.message}`, {
					type: 'error',
				})
			)
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
							name="name"
							control={control}
							placeholder="Nome Completo"
							errorMessage={errors.name?.message}
							$fullWidth
						/>
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
						<InputControlled
							name="confirmPassword"
							control={control}
							placeholder="Confirme a senha"
							type="password"
							errorMessage={errors.confirmPassword?.message}
							$fullWidth
						/>
						<InputControlled
							name="phoneNumber"
							control={control}
							placeholder="Celular"
							errorMessage={errors.phoneNumber?.message}
							$fullWidth
							$mask={[
								'(',
								/[1-9]/,
								/\d/,
								')',
								' ',
								/\d/,
								/\d/,
								/\d/,
								/\d/,
								/\d/,
								'-',
								/\d/,
								/\d/,
								/\d/,
								/\d/,
							]}
						/>
					</>
				)}

				{step === 1 && (
					<>
						<InputControlled
							name="cep"
							control={control}
							placeholder="CEP"
							onBlur={() => searchCep()}
							errorMessage={errors.cep?.message}
							$fullWidth
							$mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
						/>
						<InputControlled
							name="street"
							control={control}
							placeholder="Rua"
							disabled
							errorMessage={errors.street?.message}
							$fullWidth
						/>
						<InputControlled
							name="number"
							control={control}
							placeholder="Número"
							errorMessage={errors.number?.message}
							$fullWidth
						/>
						<InputControlled
							name="neighborhood"
							control={control}
							placeholder="Bairro"
							errorMessage={errors.neighborhood?.message}
							disabled
							$fullWidth
						/>
						<InputControlled
							name="city"
							control={control}
							placeholder="Cidade"
							errorMessage={errors.city?.message}
							disabled
							$fullWidth
						/>
						<InputControlled
							name="state"
							control={control}
							placeholder="Estado"
							errorMessage={errors.state?.message}
							disabled
							$fullWidth
						/>
						<InputControlled
							name="complement"
							control={control}
							placeholder="Complemento"
							errorMessage={errors.complement?.message}
							$fullWidth
						/>
						<InputControlled
							name="landmark"
							control={control}
							errorMessage={errors.landmark?.message}
							placeholder="Ponto de Referencia"
							$fullWidth
						/>
					</>
				)}

				<ButtonWrapper>
					{step === 0 && (
						<Button type="button" onClick={handleNextStep} $fullWidth>
              Avançar
						</Button>
					)}

					{step === 1 && (
						<Button onClick={handleSubmit(onSubmit)} $fullWidth>
              Cadastrar
						</Button>
					)}
					{step === 1 && (
						<Button onClick={handlePrevStep} $fullWidth>
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

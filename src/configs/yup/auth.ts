import * as yup from 'yup'

export const userAuthValidation = yup.object({
	email: yup.string().email('Endereço de e-mail inválido').required('O e-mail é obrigatório'),
	password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').max(30, 'A senha não deve exceder 30 caracteres').required('A senha é obrigatória'),
})

export const userValidation = yup.object({
	name: yup.string().required('O nome deve ter pelo menos 3 caracteres'),
	email: yup.string().email('Endereço de e-mail inválido').required('O e-mail é obrigatório'),
	password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').max(30, 'A senha não deve exceder 30 caracteres').required('A senha é obrigatória'),
	confirmPassword: yup.string().min(6, 'A confirmação de senha deve ter pelo menos 6 caracteres').max(30, 'A confirmação de senha não deve exceder 30 caracteres').required('A confirmação de senha é obrigatória'),
	phoneNumber: yup.string().max(15).required('Informe um telefone válido'),
	street: yup.string().required('O nome da rua é obrigatório'),
	number: yup.string().required('O número da rua é obrigatório'),
	neighborhood: yup.string().required('O bairro é obrigatório'),
	city: yup.string().min(2, 'O nome da cidade deve ter pelo menos 2 caracteres').max(150, 'O nome da cidade não deve exceder 150 caracteres').required('A cidade é obrigatória'),
	cep: yup.string().required('O cep é obrigatório'), 
	state: yup.string().required('O estado é obrigatório'),
	landmark: yup.string(),
	complement: yup.string()
})
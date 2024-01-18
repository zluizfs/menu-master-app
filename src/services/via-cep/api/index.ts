import axios from 'axios'

export const apiViacep = axios.create({
	baseURL: 'https://viacep.com.br/ws/',
	
})

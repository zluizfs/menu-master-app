import { apiMenuMaster } from '../api'
import { AuthenticationReponse, AuthenticationRequest } from '../types/auth'
import { RegisterRequest } from '../types/register'

export const AuthService = {
	authentication: async (data: AuthenticationRequest) => {
		return apiMenuMaster.post<AuthenticationReponse>('/auth', data)
	},
	register: async (data: RegisterRequest) => {
		return apiMenuMaster.post('/users/complete-registration', data)
	},
}

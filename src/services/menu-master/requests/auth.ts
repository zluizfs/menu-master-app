import { apiMenuMaster } from '../api'
import { AuthenticationReponse, AuthenticationRequest } from '../types/auth'

export const AuthService = {
	authentication: async (data: AuthenticationRequest) => {
		return apiMenuMaster.post<AuthenticationReponse>('/auth', data)
	},
}

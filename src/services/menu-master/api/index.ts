import { useAuth } from '@menu-master-app/store'
import axios from 'axios'

export const apiMenuMaster = axios.create({
	baseURL: 'http://localhost:3333',
})

function getUserToken() {
	const { user } = useAuth.getState()

	if (user) {
		return user.token
	}

	return null
}



apiMenuMaster.interceptors.request.use(
	(config) => {
		const token = getUserToken()

		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}

		return config
	},
	(error) => Promise.reject(error)
)

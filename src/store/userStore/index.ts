import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { AuthState } from './types'

export const useAuth = create(
	persist<AuthState>(
		(set) => ({
			isAuthenticated: false,
			user: null,
			authenticate: (user) => {
				set({
					user,
					isAuthenticated: true,
				})
			},
			logout: async () => {
				set({
					user: null,
					isAuthenticated: false,
				})
			},
		}),
		{
			name: 'menu-master_auth',
		}
	)
)

import { create } from 'zustand'

import { AuthState, User } from './types'
import { setCookie, destroyCookie, parseCookies } from 'nookies'
import { AuthEnum } from '@menu-master-app/@types'

export const useAuth = create<AuthState>((set) => ({
	user: null,
	sessionRestore: () => {
		const { [AuthEnum.AUTH_COOKIE_NAME]: user } = parseCookies()

		if (user) {
			const userParsed = JSON.parse(user) as User

			set({
				user: userParsed,
			})
		}
	},
	authenticate: async (user) => {
		set({
			user,
		})

		setCookie(undefined, AuthEnum.AUTH_COOKIE_NAME, JSON.stringify(user), {
			maxAge: 60 * 60 * 7,
			path: '/',
		})
	},
	logout: async () => {
		destroyCookie(undefined, AuthEnum.AUTH_COOKIE_NAME)
		set({
			user: null,
		})
	},
}))

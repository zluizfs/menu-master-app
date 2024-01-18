import { cookies } from 'next/headers'
import { AuthEnum } from './@types'
import { NextResponse } from 'next/server'

export function middleware(req: Request) {
	const user = !!cookies().get(AuthEnum.AUTH_COOKIE_NAME)?.value

	if (!user) {
		return NextResponse.redirect(new URL('/', req?.url))
	}

}

export const config = {
	matcher: ['/dashboard', '/restaurant/:path*'],
}

import Image from 'next/image'
import {
	ContentWrapper,
	FormWrapper,
	ImageOverlay,
	ImageWrapper,
	LoginImage,
	LoginWrapper,
} from './styles'
import { cookies } from 'next/headers'
import { AuthEnum } from '@menu-master-app/@types'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: {
		template: '%s | Menu Master',
		default: 'Menu Master'
	}
}

export default function AuthLayout({
	children,
}: {
  children: React.ReactNode;
}) {
	const tokenCookie = !!cookies().get(AuthEnum.AUTH_COOKIE_NAME)

	if (tokenCookie) redirect('/dashboard')

	return (
		<LoginWrapper>
			<ImageWrapper>
				<ImageOverlay />
				<LoginImage
					src="/image/background-image.png"
					alt="Mesa de cozinha com pizza, macarrão, saladas e azeite"
					fill
				/>
			</ImageWrapper>
			<FormWrapper>
				<ContentWrapper>
					<Image
						src="/image/menu-master-logo.svg"
						alt="Menu Master Logo"
						width="250"
						height="50"
					/>
					{children}
				</ContentWrapper>
			</FormWrapper>
		</LoginWrapper>
	)
}

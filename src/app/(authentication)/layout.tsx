import Image from 'next/image'
import {
	ContentWrapper,
	FormWrapper,
	ImageOverlay,
	ImageWrapper,
	LoginWrapper,
} from './styles'

export default function AuthLayout({
	children,
}: {
  children: React.ReactNode;
}) {
	return (
		<LoginWrapper>
			<ImageWrapper>
				<ImageOverlay />
				<Image
					src="/image/background-image.png"
					alt="Mesa de cozinha com pizza, macarrão, saladas e azeite"
					objectFit="cover"
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

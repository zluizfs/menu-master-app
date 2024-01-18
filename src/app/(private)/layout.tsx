import { Container, Navbar } from '@menu-master-app/components'
import { Metadata } from 'next'
import { PageContent } from './styles'


export const metadata: Metadata = {
	title: {
		template: '%s | Menu Master',
		default: 'Menu Master'
	}
}

export default function PrivateLayout({
	children,
}: {
  children: React.ReactNode;
}) {
	return (
		<>
			<Navbar />
			<Container>
				<PageContent>
					{children}
				</PageContent>
			</Container>
		</>
	)
}

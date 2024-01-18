import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Cadastro',
}

export default function RegisterLayout({
	children,
}: {
  children: React.ReactNode;
}) {
	return children
}

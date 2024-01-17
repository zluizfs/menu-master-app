'use client'

import StyledComponentsRegistry from '@menu-master-app/lib/registry'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import { DefaultTheme } from '@menu-master-app/styles/themes/default'

export default function RootLayout({
	children,
}: {
  children: React.ReactNode;
}) {
	return (
		<html lang="pt-br">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
			</head>
			<body >
				<StyledComponentsRegistry>
					<ThemeProvider theme={DefaultTheme}>
						<GlobalStyles />
						{children}
					</ThemeProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	)
}

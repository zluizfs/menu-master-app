'use client'

import { ErrorMessage, TextInput, Wrapper } from './styles'
import { InputUncontrolledProps } from './types'

export function InputUncontrolled({
	errorMessage,
	fullWidth,

	...props
}: InputUncontrolledProps) {
	const isError = !!(errorMessage && errorMessage.length > 0)

	return (
		<Wrapper fullWidth={fullWidth}>
			<TextInput error={isError} {...props} fullWidth={fullWidth} />
			{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
		</Wrapper>
	)
}

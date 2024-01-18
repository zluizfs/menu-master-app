'use client'
import MaskedInput from 'react-text-mask'
import { ErrorMessage, TextInput, Wrapper } from './styles'
import { InputUncontrolledProps } from './types'
import { LegacyRef } from 'react'

export function InputUncontrolled({
	errorMessage,
	$fullWidth,
	$mask,
	...props
}: InputUncontrolledProps) {
	const isError = !!(errorMessage && errorMessage.length > 0)

	return (
		<Wrapper $fullWidth={$fullWidth}>
			{$mask ? (
				<MaskedInput
					{...props}
					mask={$mask}
					render={(ref, innerProps) => (
						<TextInput
							ref={ref as LegacyRef<HTMLInputElement>}
							$error={isError}
							$fullWidth={$fullWidth}
							{...innerProps}
						/>
					)}
				/>
			) : (
				<TextInput $error={isError} $fullWidth={$fullWidth} {...props} />
			)}

			{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
		</Wrapper>
	)
}

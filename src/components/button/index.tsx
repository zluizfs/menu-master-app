'use client'

import { ButtonStyled, LinkStyled } from './styles'
import { ButtonProps } from './types'

export function Button({
	$variants,
	$fullWidth,
	href,
	children,
	...props
}: ButtonProps) {
	const ButtonComponent = (
		<ButtonStyled $variants={$variants} $fullWidth={$fullWidth} {...props}>
			{children}
		</ButtonStyled>
	)


	return (
		href ? (
			<LinkStyled href={href}>
				{ButtonComponent}
			</LinkStyled>
		) : ButtonComponent
	)
}

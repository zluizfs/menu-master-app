'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'

import {
	CloseButton,
	StyledContent,
	StyledDescription,
	StyledOverlay,
	StyledTitle,
} from './styles'
import { Icon } from '..'

type ContentProps = React.ComponentPropsWithRef<typeof StyledContent> & {
  children: React.ReactNode
}

export function Content({ children, ...props }: ContentProps) {
	return (
		<DialogPrimitive.Portal>
			<StyledOverlay />
			<StyledContent {...props}>
				{children}
				<DialogPrimitive.Close asChild>
					<CloseButton>
						<Icon name='X' size={20} />
					</CloseButton>
				</DialogPrimitive.Close>
			</StyledContent>
		</DialogPrimitive.Portal>
	)
}

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogContent = Content
export const DialogTitle = StyledTitle
export const DialogDescription = StyledDescription

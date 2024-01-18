
import { ContainerWrapper } from './styles'
import { ContainerProps } from './types'

export function Container({ children }: ContainerProps){
	return (
		<ContainerWrapper>{children}</ContainerWrapper>
	)
}
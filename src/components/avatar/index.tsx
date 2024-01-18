import { AvatarFallback, AvatarRoot } from './styles'
import { AvatarProps } from './types'

export function Avatar({ username }: AvatarProps){
	return (
		<AvatarRoot>
			<AvatarFallback>{username[0]}</AvatarFallback>
		</AvatarRoot>
	)
}
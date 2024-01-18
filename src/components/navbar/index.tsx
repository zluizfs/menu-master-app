'use client'

import Image from 'next/image'
import {
	AvatarWrapper,
	ContentWrapper,
	LogoutText,
	NavbarWrapper,
	UserInfoWrapper,
} from './styles'
import { AddressView, Avatar, Container } from '..'
import { useAuth } from '@menu-master-app/store'
import { useRouter } from 'next/navigation'

export function Navbar() {
	const { push } = useRouter()
	const { user, logout } = useAuth()

	function handleLogout(){
		logout()
		push('/')
	}

	return (
		<NavbarWrapper>
			<Container>
				<ContentWrapper>
					<AddressView
						address={`${user?.addresses[0]?.street}, ${user?.addresses[0]?.number} - ${user?.addresses[0]?.neighborhood}`}
						city={`${user?.addresses[0]?.city} - ${user?.addresses[0]?.state}`}
					/>

					<Image
						src="/image/menu-master-logo.svg"
						alt="Menu Master Logo"
						width="150"
						height="35"
					/>
					<AvatarWrapper>
						<Avatar username={user?.name || ''} />

						<UserInfoWrapper>
							<span>{user?.name}</span>
							<LogoutText onClick={() => handleLogout()}>Sair</LogoutText>
						</UserInfoWrapper>
					</AvatarWrapper>
				</ContentWrapper>
			</Container>
		</NavbarWrapper>
	)
}

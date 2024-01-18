import { Icon } from '../icon'
import { Address, AddressLocalizationWrapper, AddressWrapper, City } from './styles'
import { AddressViewProps } from './types'

export function AddressView({ address, city }: AddressViewProps){
	return (
		<AddressWrapper>
			<Icon name='MapPin' color="primary_100" />
			<AddressLocalizationWrapper>
				<Address>{address}</Address>
				<City>{city}</City>
			</AddressLocalizationWrapper>
		</AddressWrapper>
	)
}
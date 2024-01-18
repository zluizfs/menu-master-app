'use client'

import {
	AddressView,
	Button,
	Icon,
	InputUncontrolled,
	RestaurantDishesCard,
} from '@menu-master-app/components'
import {
	ContactInformationWrapper,
	DishesWrapper,
	InformationWrapper,
	InputWrapper,
	RestaurantImage,
	RestaurantImageWrapper,
	RestaurantInfoWithIconWrapper,
	RestaurantInfoWrapper,
	RestaurantTitle,
	RestaurantWrapper,
} from './styles'
import { DishService } from '@menu-master-app/services/menu-master/requests/dish'
import { useEffect, useState } from 'react'
import { Dish } from '@menu-master-app/services/menu-master/types/dish'
import { useParams } from 'next/navigation'
import { RestaurantService } from '@menu-master-app/services/menu-master/requests/restaurant'
import { Restaurant } from '@menu-master-app/services/menu-master/types/restaurant'


export default function RestaurantsDishes() {
	const { id } = useParams()

	const [search, setSearch] = useState('')
	const [restaurant, setRestaurant] = useState<Restaurant | null>()
	const [dishes, setDishes] = useState<Dish[]>([])

	useEffect(() => {
		async function fetchData() {
			await RestaurantService.findOne(Number(id)).then(({ data }) => {
				setRestaurant(data)
			})
		}

		fetchData()
	}, [])

	useEffect(() => {
		async function fetchData() {
			await DishService.findAll(Number(id), search).then(({ data }) => {
				setDishes(data)
			})
		}

		fetchData()
	}, [search])

	return (
		<>
			<Button href="/dashboard">Voltar</Button>
			<RestaurantWrapper>
				<RestaurantImageWrapper>
					<RestaurantImage src={restaurant?.imageUrl || ''} alt="" fill />
				</RestaurantImageWrapper>
				<InformationWrapper>
					<RestaurantInfoWithIconWrapper>
						<Icon name="Star" color="primary_100" /> 4.55
					</RestaurantInfoWithIconWrapper>
					<RestaurantInfoWrapper>
						<RestaurantTitle>{restaurant?.name}</RestaurantTitle>
						<p>{restaurant?.description}</p>
					</RestaurantInfoWrapper>
					<ContactInformationWrapper>
						<AddressView
							address={`${restaurant?.address.street}, ${restaurant?.address.number} - ${restaurant?.address.neighborhood}`}
							city={`${restaurant?.address.city} - ${restaurant?.address.state}`}
						/>
						<RestaurantInfoWithIconWrapper>
							<Icon name="Phone" color="primary_100" /> {restaurant?.phoneNumber}
						</RestaurantInfoWithIconWrapper>
					</ContactInformationWrapper>
				</InformationWrapper>
			</RestaurantWrapper>

			<InputWrapper>
				<InputUncontrolled
					placeholder="Pesquise por pratos..."
					$fullWidth
					onChange={(e) => setSearch(e.target.value)}
				/>
			</InputWrapper>
			<DishesWrapper>
				{dishes.map((item) => (
					<RestaurantDishesCard
						key={item.dishId}
						title={item.name}
						description={item.description}
						imageUrl={item.imageUrl}
						price={item.price}
					/>
				))}
			</DishesWrapper>
		</>
	)
}

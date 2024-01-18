'use client'

import { InputUncontrolled, RestaurantCard } from '@menu-master-app/components'
import { InputWrapper, RestaurantsWrapper, Username } from './styles'
import { useAuth } from '@menu-master-app/store'
import { useEffect, useState } from 'react'
import { Restaurant } from '@menu-master-app/services/menu-master/types/restaurant'
import { RestaurantService } from '@menu-master-app/services/menu-master/requests/restaurant'

export default function Dashboard() {
	const { user } = useAuth()

	const [search, setSearch] = useState('')
	const [restaurants, setRestaurants] = useState<Restaurant[]>([])

	useEffect(() => {
		async function fetchData() {
			await RestaurantService.findAll(search).then(({ data }) => {
				console.log(data)
				setRestaurants(data)
			})
		}

		fetchData()
	}, [search])

	return (
		<>
			<div>
				<Username>Olá, {user?.name}</Username>
				<p>O que vamos pedir hoje?</p>
			</div>

			<InputWrapper>
				<InputUncontrolled
					placeholder="Pesquise por restaurantes..."
					onChange={(e) => setSearch(e.target.value)}
					$fullWidth
				/>
			</InputWrapper>

			<RestaurantsWrapper>
				{restaurants.map((item) => (
					<RestaurantCard
						key={item.id}
						title={item.name}
						description={item.description}
						rating={item.rating}
						imageUrl={item.imageUrl}
						href={`/restaurant/${item.id}`}
					/>
				))}
			</RestaurantsWrapper>
		</>
	)
}

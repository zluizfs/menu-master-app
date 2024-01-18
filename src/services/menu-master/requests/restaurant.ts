import { apiMenuMaster } from '../api'
import { Restaurant } from '../types/restaurant'

export const RestaurantService = {
	findAll: async (nameOrDescription: string) => {
		return apiMenuMaster.get<Restaurant[]>('/restaurant', {
			params: {
				nameOrDescription
			}
		})
	},
	findOne: async (restaurantId: number) => {
		return apiMenuMaster.get<Restaurant>(`/restaurant/${restaurantId}`, {
		})
	},
}

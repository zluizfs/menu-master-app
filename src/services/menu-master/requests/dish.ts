import { apiMenuMaster } from '../api'
import { Dish } from '../types/dish'

export const DishService = {
	findAll: async (restaurantId: number, dishName: string) => {
		return apiMenuMaster.get<Dish[]>('/dish', {
			params: {
				restaurantId,
				dishName
			}
		})
	},
}

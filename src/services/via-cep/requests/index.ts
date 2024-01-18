import { apiViacep } from '../api'
import { ViaCepReponse } from '../types/cep'

export const ViaCepService = {
	findCep: async (cep: string) => {
		return apiViacep.get<ViaCepReponse>(`${cep}/json/`)
	},
}

export function cleanStringOfNumbers(str: string) {
	return str.replace(/\D/g, '')
}

export function formatMoneyBRL(value: number) {
	return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
		value
	)
}

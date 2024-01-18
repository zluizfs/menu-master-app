'use client'

import { useState } from 'react'
import {
	DisheCardImage,
	DisheCardImageWrapper,
	DisheCardWrapper,
	DisheDialogImage,
	DisheDialogImageWrapper,
	DisheInfoCardWrapper,
	DisheInfoDialogWrapper,
	DisheTitle,
	DishesPrice
} from './styles'
import { RestaurantDishesCardProps } from './types'
import { Dialog, DialogContent } from '..'
import { formatMoneyBRL } from '@menu-master-app/util/formatting'

export function RestaurantDishesCard({
	title,
	description,
	price,
	imageUrl,
}: RestaurantDishesCardProps) {
	const [openViewDetails, setOpenViewDetails] = useState(false)

	return (
		<>
			<DisheCardWrapper onClick={() => setOpenViewDetails(true)}>
				<DisheCardImageWrapper>
					<DisheCardImage src={imageUrl} alt={title} fill />
				</DisheCardImageWrapper>
				<DisheInfoCardWrapper>
					<DisheTitle>{title}</DisheTitle>
					<p>{description.length > 50 ? `${description.slice(0, 50)}...` : description}</p>
					<DishesPrice>{formatMoneyBRL(price)}</DishesPrice>
				</DisheInfoCardWrapper>
			</DisheCardWrapper>

			<Dialog open={openViewDetails} onOpenChange={setOpenViewDetails}>
				<DialogContent>
					<DisheDialogImageWrapper>
						<DisheDialogImage src={imageUrl} alt={title} fill />
					</DisheDialogImageWrapper>
					<DisheInfoDialogWrapper>
						<DisheTitle>{title}</DisheTitle>
						<p>{description}</p>
						<DishesPrice>{formatMoneyBRL(price)}</DishesPrice>
					</DisheInfoDialogWrapper>
				</DialogContent>
			</Dialog>
		</>
	)
}

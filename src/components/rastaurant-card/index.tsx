import { Icon } from '..'
import {
	CustomLink,
	RestaurantCardImage,
	RestaurantCardImageWrapper,
	RestaurantCardWrapper,
	RestaurantInfoCardWrapper,
	RestaurantRatingWrapper,
	RestaurantTitle,
} from './styles'
import { RestaurantCardProps } from './types'

export function RestaurantCard({
	href,
	title,
	description,
	rating,
	imageUrl,
}: RestaurantCardProps) {
	return (
		<CustomLink href={href}>
			<RestaurantCardWrapper>
				<RestaurantCardImageWrapper>
					<RestaurantCardImage src={imageUrl} alt={title} fill />
				</RestaurantCardImageWrapper>
				<RestaurantInfoCardWrapper>
					<RestaurantTitle>{title}</RestaurantTitle>
					<p>{description}</p>
				</RestaurantInfoCardWrapper>
				<RestaurantRatingWrapper>
					<Icon name="Star" color="primary_100" /> {rating}
				</RestaurantRatingWrapper>
			</RestaurantCardWrapper>
		</CustomLink>
	)
}

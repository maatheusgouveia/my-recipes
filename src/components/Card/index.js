import { GiHearts, GiAlarmClock, GiBerriesBowl } from 'react-icons/gi';

import {
	ActionArea,
	Container,
	Image,
	ImageContainer,
	Details,
	Category,
	Title,
	Creator,
	Favorites,
	CTA,
	IconsContainer,
	FavoriteCounter,
} from './styles';

export default function Card({
	onClick,
	title,
	category,
	created_by,
	favorite_counter,
	portions,
	cooking_time,
}) {
	return (
		<Container onClick={onClick}>
			<ImageContainer>
				<Image src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505https://cdn-icons-png.flaticon.com/512/3565/3565418.png" />
			</ImageContainer>

			<Details className="details">
				<Category>{category}</Category>

				<Title>{title}</Title>

				<Creator>By: {created_by}</Creator>

				<FavoriteCounter>
					<GiHearts color="red" size={18} />
					<Favorites>{favorite_counter}</Favorites>
				</FavoriteCounter>
			</Details>

			<ActionArea className="actionArea">
				<IconsContainer>
					<div>
						<GiAlarmClock size={36} color="#999" />
						{cooking_time} MIN
					</div>

					<div>
						<GiBerriesBowl size={36} color="#999" />
						{portions} PORTIONS
					</div>
				</IconsContainer>

				<CTA>See Recipe</CTA>
			</ActionArea>
		</Container>
	);
}

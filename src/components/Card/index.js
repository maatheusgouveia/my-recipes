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

export default function Card({ onClick }) {
	return (
		<Container onClick={onClick}>
			<ImageContainer>
				<Image src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505https://cdn-icons-png.flaticon.com/512/3565/3565418.png" />
			</ImageContainer>

			<Details className="details">
				<Category>Category</Category>

				<Title>Recipe long title</Title>

				<Creator>By: Creator name</Creator>

				<FavoriteCounter>
					<GiHearts color="red" size={18} />
					<Favorites>985</Favorites>
				</FavoriteCounter>
			</Details>

			<ActionArea className="actionArea">
				<IconsContainer>
					<div>
						<GiAlarmClock size={36} color="#999" />
						90 MIN
					</div>

					<div>
						<GiBerriesBowl size={36} color="#999" />6 PORTIONS
					</div>
				</IconsContainer>

				<CTA>See Recipe</CTA>
			</ActionArea>
		</Container>
	);
}

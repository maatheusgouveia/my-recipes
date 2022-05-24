import { GiHearts, GiAlarmClock, GiBerriesBowl } from 'react-icons/gi';

import {
	Container,
	Title,
	Image,
	ImageContainer,
	Details,
	Detail,
} from './styles';

const text =
	'1 cebola média picada 250 g de carne bovina (de preferência músculo ou costela)\n1 tomate médio picado \n2 batatas médias cortadas em cubos\n2 cenouras médias cortadas em cubos \n2 mandioquinhas médias cortadas em cubos \n12 vagens picadas\n2 xícaras de macarrão (tipo argolinha ou conchinha ou ave maria ou cabelo de anjo)\n1 tablete de caldo de carne\n1 envelope de tempero\n1 pitada de pimenta do reino ou pimenta calabresa\n1 xícara de salsinha e cebolinha bem picadinhas Sal a gosto Água até um pouco mais de a metade da panela de pressão';

export default function Recipe() {
	return (
		<>
			<Container>
				<Title>Title of the recipe</Title>

				<ImageContainer>
					<Image src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505https://cdn-icons-png.flaticon.com/512/3565/3565418.png" />
				</ImageContainer>

				<Details>
					<Detail>
						<GiAlarmClock size={36} />
						<p>Cooking time</p>
						<p>28 MIN</p>
					</Detail>

					<Detail>
						<GiBerriesBowl size={36} />
						<p>Portions</p>
						<p>12</p>
					</Detail>

					<Detail>
						<GiHearts size={36} />
						<p>Favorites</p>
						<p>985</p>
					</Detail>
				</Details>

				<Title>Ingredients</Title>

				<ul>
					{text.split('\n').map(txt => (
						<li>{txt}</li>
					))}
				</ul>
			</Container>

			<Container>
				<Title>Instructions</Title>

				<ul>
					{text.split('\n').map(txt => (
						<li>{txt}</li>
					))}
				</ul>
			</Container>
		</>
	);
}

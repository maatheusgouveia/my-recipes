import { useNavigate } from 'react-router-dom';
import { GiCookingPot, GiHearts, GiHealthNormal } from 'react-icons/gi';

import { Container, Content, LogoContainer, ActionsContainer } from './styles';
import { useSelector } from 'react-redux';

export default function Header() {
	const navigate = useNavigate();
	const favorite_counter = useSelector(state => state.favorite.counter);

	function handleGoToNewRecipe() {
		navigate('/new/recipe');
	}

	function handleGoToMain() {
		navigate('/');
	}

	function handleGoToFavorites() {
		navigate('/me/favorites/');
	}

	return (
		<Container>
			<Content>
				<LogoContainer>
					<span onClick={handleGoToMain}>
						<GiCookingPot size={54} color="#fff" />

						<h1>My Recipes</h1>
					</span>
				</LogoContainer>

				<ActionsContainer>
					<button onClick={handleGoToNewRecipe}>
						<GiHealthNormal size={30} color="#fff" />
						Create recipe
					</button>

					<button onClick={handleGoToFavorites}>
						<GiHearts size={30} color="#fff" />
						Favorites ({favorite_counter})
					</button>
				</ActionsContainer>
			</Content>
		</Container>
	);
}

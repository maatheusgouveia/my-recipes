import { useNavigate } from 'react-router-dom';
import { GiCookingPot, GiHearts } from 'react-icons/gi';

import { Container, Content, LogoContainer, ActionsContainer } from './styles';

export default function Header() {
	const navigate = useNavigate();

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
					<button onClick={handleGoToNewRecipe}>New Recipe</button>

					<span onClick={handleGoToFavorites}>
						<GiHearts size={30} color="#fff" />
					</span>
				</ActionsContainer>
			</Content>
		</Container>
	);
}

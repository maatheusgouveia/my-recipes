import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';

import { Container } from './styles';

export default function Home() {
	const navigate = useNavigate();

	function handleCardClick() {
		navigate(`/recipe/dasdsadasdasdn8asdabs`);
	}

	return (
		<Container>
			<Card onClick={handleCardClick} />
			<Card onClick={handleCardClick} />
			<Card onClick={handleCardClick} />

			<Card onClick={handleCardClick} />
			<Card onClick={handleCardClick} />
			<Card onClick={handleCardClick} />
		</Container>
	);
}

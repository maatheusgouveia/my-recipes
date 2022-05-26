import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Card from '../../components/Card';
import { getFavoriteRecipesListRequest } from '../../store/modules/favorite/actions';

import { Container } from './styles';

export default function FavoriteRecipes() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const recipes = useSelector(state => state.favorite.list);

	useEffect(() => {
		dispatch(
			getFavoriteRecipesListRequest(
				'd05f0e51-d9cb-4ec1-b7a8-d4eede793eaa'
			)
		);
	}, [dispatch]);

	function handleCardClick(id) {
		navigate(`/recipe/${id}`);
	}

	return (
		<Container>
			{recipes.map(
				({
					id,
					title,
					category,
					created_by,
					instructions,
					ingredients_list,
					favorite_counter,
					portions,
					cooking_time,
				}) => (
					<Card
						key={id}
						onClick={() => handleCardClick(id)}
						title={title}
						category={category}
						created_by={created_by}
						instructions={instructions}
						ingredients_list={ingredients_list}
						favorite_counter={favorite_counter}
						portions={portions}
						cooking_time={cooking_time}
					/>
				)
			)}
		</Container>
	);
}

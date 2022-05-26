import { useEffect, useMemo } from 'react';
import { GiHearts, GiAlarmClock, GiBerriesBowl } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toggleFavoriteRequest } from '../../store/modules/favorite/actions';

import { getRecipeByIdRequest } from '../../store/modules/recipe/actions';

import {
	Container,
	Title,
	Image,
	ImageContainer,
	Details,
	Detail,
} from './styles';

export default function Recipe() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const recipe = useSelector(state => state.recipe.data);
	const favorite_recipes = useSelector(state => state.favorite.list);

	useEffect(() => {
		dispatch(getRecipeByIdRequest(id));
	}, [dispatch, id]);

	const isFavorite = useMemo(() => {
		return favorite_recipes.some(recipe => recipe.id === id);
	}, [favorite_recipes, id]);

	function handleFavoriteClick() {
		dispatch(toggleFavoriteRequest(id));
	}

	return (
		<>
			<Container>
				<Title>{recipe.title}</Title>

				<ImageContainer>
					<Image src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505https://cdn-icons-png.flaticon.com/512/3565/3565418.png" />
				</ImageContainer>

				<Details>
					<Detail>
						<GiAlarmClock size={36} />
						<p>Cooking time</p>
						<p>{recipe.cooking_time} MIN</p>
					</Detail>

					<Detail>
						<GiBerriesBowl size={36} />
						<p>Portions</p>
						<p>{recipe.portions}</p>
					</Detail>

					<Detail>
						<button onClick={handleFavoriteClick}>
							<GiHearts
								size={36}
								color={isFavorite ? '#ff6a28' : '#999'}
							/>
						</button>
						<p>Favorites</p>
						<p>{recipe.favorite_counter}</p>
					</Detail>
				</Details>

				<Title>Ingredients</Title>

				<ul>
					{recipe.ingredients_list?.split('\n').map(txt => (
						<li key={txt}>{txt}</li>
					))}
				</ul>
			</Container>

			<Container>
				<Title>Instructions</Title>

				<ul>
					{recipe.instructions?.split('\n').map(txt => (
						<li key={txt}>{txt}</li>
					))}
				</ul>
			</Container>
		</>
	);
}

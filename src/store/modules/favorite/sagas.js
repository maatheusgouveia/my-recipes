import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import {
	getFavoriteRecipesListSuccess,
	getFavoriteRecipesListFailure,
	toggleFavoriteFailure,
	toggleFavoriteSuccess,
	getFavoriteRecipesListRequest,
} from './actions';

export function* getFavoriteRecipesList({ payload }) {
	const { user_id } = payload;

	const state = yield select();

	try {
		const response = yield call(
			api.get,
			`favorite_recipes?user_id=${user_id}`
		);

		const favorite_recipes_ids = response.data.map(obj => obj.recipe_id);

		const favorite_recipes = state.recipe.list.filter(recipe =>
			favorite_recipes_ids.includes(recipe.id)
		);

		yield put(getFavoriteRecipesListSuccess(favorite_recipes));
	} catch (err) {
		toast.error('Something went wrong 🤔');
		yield put(getFavoriteRecipesListFailure());
	}
}

export function* toggleFavorite({ payload }) {
	const user_id = 'd05f0e51-d9cb-4ec1-b7a8-d4eede793eaa';
	const { recipe_id } = payload;

	try {
		const state = yield select();
		const favorite_list = state.favorite.list;

		const isFavorite = favorite_list.some(
			recipe => recipe.id === recipe_id
		);

		if (isFavorite) {
			const response = yield call(
				api.get,
				`favorite_recipes?user_id=${user_id}&recipe_id=${recipe_id}`
			);
			const favorite_id = response.data[0].id;

			yield call(api.delete, `favorite_recipes/${favorite_id}`);
		} else {
			yield call(api.post, 'favorite_recipes', {
				recipe_id,
				user_id,
			});
		}

		yield put(getFavoriteRecipesListRequest(user_id));
		yield put(toggleFavoriteSuccess());
	} catch (err) {
		toast.error('Something went wrong 🤔');
		yield put(toggleFavoriteFailure());
	}
}

export default all([
	takeLatest(
		'@favorite/GET_FAVORITE_RECIPES_LIST_REQUEST',
		getFavoriteRecipesList
	),
	takeLatest('@favorite/TOGGLE_FAVORITE_REQUEST', toggleFavorite),
]);

import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import {
	getFavoriteRecipesListSuccess,
	getFavoriteRecipesListFailure,
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

export default all([
	takeLatest(
		'@favorite/GET_FAVORITE_RECIPES_LIST_REQUEST',
		getFavoriteRecipesList
	),
]);

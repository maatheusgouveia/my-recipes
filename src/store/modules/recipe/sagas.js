import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import {
	createRecipeSuccess,
	createRecipeFailure,
	getRecipesListSuccess,
	getRecipesListFailure,
	getRecipeByIdFailure,
	getRecipeByIdSuccess,
} from './actions';

export function* createRecipe({ payload }) {
	console.log(payload);
	const { data } = payload;

	const mocked_data = {
		...data,
		favorite_counter: 333,
		created_by: 'Matheus',
	};

	try {
		const response = yield call(api.post, 'recipes', mocked_data);

		toast.success('Recipe created successfully! 🎉🎉');

		yield put(createRecipeSuccess(response.data));
	} catch (err) {
		toast.error('Something went wrong 🤔');
		yield put(createRecipeFailure());
	}
}

export function* getRecipesList() {
	try {
		const response = yield call(api.get, 'recipes');

		yield put(getRecipesListSuccess(response.data));
	} catch (err) {
		toast.error('Something went wrong 🤔');
		yield put(getRecipesListFailure());
	}
}

export function* getRecipeById({ payload }) {
	const { id } = payload;

	try {
		const response = yield call(api.get, `recipes/${id}`);

		yield put(getRecipeByIdSuccess(response.data));
	} catch (err) {
		toast.error('Something went wrong 🤔');
		yield put(getRecipeByIdFailure());
	}
}

export default all([
	takeLatest('@recipe/CREATE_RECIPE_REQUEST', createRecipe),
	takeLatest('@recipe/GET_RECIPES_LIST_REQUEST', getRecipesList),
	takeLatest('@recipe/GET_RECIPE_BY_ID_REQUEST', getRecipeById),
]);

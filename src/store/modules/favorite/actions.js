export function toggleFavoriteRequest(recipe_id) {
	return {
		type: '@favorite/TOGGLE_FAVORITE_REQUEST',
		payload: { recipe_id },
	};
}

export function toggleFavoriteSuccess() {
	return {
		type: '@favorite/TOGGLE_FAVORITE_SUCCESS',
	};
}

export function toggleFavoriteFailure() {
	return {
		type: '@favorite/TOGGLE_FAVORITE_FAILURE',
	};
}

export function getFavoriteRecipesListRequest(user_id) {
	return {
		type: '@favorite/GET_FAVORITE_RECIPES_LIST_REQUEST',
		payload: { user_id },
	};
}

export function getFavoriteRecipesListSuccess(data) {
	return {
		type: '@favorite/GET_FAVORITE_RECIPES_LIST_SUCCESS',
		payload: { data },
	};
}

export function getFavoriteRecipesListFailure() {
	return {
		type: '@favorite/GET_FAVORITE_RECIPES_LIST_FAILURE',
	};
}

export function toggleFavoriteRequest(data) {
	return {
		type: '@favorite/TOGGLE_FAVORITE_REQUEST',
		payload: { data },
	};
}

export function toggleFavoriteSuccess(data) {
	return {
		type: '@favorite/TOGGLE_FAVORITE_SUCCESS',
		payload: { data },
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

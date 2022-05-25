export function createRecipeRequest(data) {
	return {
		type: '@recipe/CREATE_RECIPE_REQUEST',
		payload: { data },
	};
}

export function createRecipeSuccess(data) {
	return {
		type: '@recipe/CREATE_RECIPE_SUCCESS',
		payload: { data },
	};
}

export function createRecipeFailure() {
	return {
		type: '@recipe/CREATE_RECIPE_FAILURE',
	};
}

export function getRecipesListRequest() {
	return {
		type: '@recipe/GET_RECIPES_LIST_REQUEST',
	};
}

export function getRecipesListSuccess(data) {
	return {
		type: '@recipe/GET_RECIPES_LIST_SUCCESS',
		payload: { data },
	};
}

export function getRecipesListFailure() {
	return {
		type: '@recipe/GET_RECIPES_LIST_FAILURE',
	};
}

export function getRecipeByIdRequest(id) {
	return {
		type: '@recipe/GET_RECIPE_BY_ID_REQUEST',
		payload: { id },
	};
}

export function getRecipeByIdSuccess(data) {
	return {
		type: '@recipe/GET_RECIPE_BY_ID_SUCCESS',
		payload: { data },
	};
}

export function getRecipeByIdFailure() {
	return {
		type: '@recipe/GET_RECIPE_BY_ID_FAILURE',
	};
}

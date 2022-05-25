import produce from 'immer';

const INITIAL_STATE = {
	list: [],
	loading: false,
	error: false,
	data: {},
};

export default function recipe(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@recipe/CREATE_RECIPE_REQUEST': {
				break;
			}
			case '@recipe/CREATE_RECIPE_SUCCESS': {
				break;
			}
			case '@recipe/CREATE_RECIPE_FAILURE': {
				break;
			}
			case '@recipe/GET_RECIPES_LIST_REQUEST': {
				draft.loading = true;
				break;
			}
			case '@recipe/GET_RECIPES_LIST_SUCCESS': {
				draft.loading = false;
				draft.list = action.payload.data;
				break;
			}
			case '@recipe/GET_RECIPES_LIST_FAILURE': {
				draft.loading = false;
				break;
			}
			case '@recipe/GET_RECIPE_BY_ID_REQUEST': {
				draft.loading = true;

				break;
			}
			case '@recipe/GET_RECIPE_BY_ID_SUCCESS': {
				draft.loading = false;
				draft.data = action.payload.data;
				break;
			}
			case '@recipe/GET_RECIPE_BY_ID_FAILURE': {
				draft.loading = false;
				break;
			}
			default:
		}
	});
}

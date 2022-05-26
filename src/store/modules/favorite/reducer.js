import produce from 'immer';

const INITIAL_STATE = {
	counter: 0,
	list: [],
	loading: false,
	error: false,
};

export default function favorite(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@favorite/GET_FAVORITE_RECIPES_LIST_REQUEST': {
				draft.loading = true;
				break;
			}
			case '@favorite/GET_FAVORITE_RECIPES_LIST_SUCCESS': {
				draft.loading = false;
				draft.list = action.payload.data;
				break;
			}
			case '@favorite/GET_FAVORITE_RECIPES_LIST_FAILURE': {
				draft.loading = false;
				break;
			}
			default:
		}
	});
}

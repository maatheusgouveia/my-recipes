import produce from 'immer';

const INITIAL_STATE = {
	profile: {
		id: 'd05f0e51-d9cb-4ec1-b7a8-d4eede793eaa',
		name: 'Matheus',
		email: 'maatheusgouveia@gmail.com',
	},
};

export default function user(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@auth/SIGN_IN_SUCCESS':
				draft.profile = action.payload.user;
				break;
			case '@user/UPDATE_PROFILE_SUCCESS': {
				draft.profile = action.payload.profile;
				break;
			}
			case '@auth/SIGN_OUT': {
				draft.profile = null;
				break;
			}
			default:
		}
	});
}

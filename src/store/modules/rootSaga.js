import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import recipe from './recipe/sagas';
import favorite from './favorite/sagas';

export default function* rootSaga() {
	return yield all([auth, user, recipe, favorite]);
}

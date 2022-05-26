import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
	const persistedReducer = persistReducer(
		{
			key: 'my-recipes',
			storage,
			whitelist: ['auth', 'user', 'recipe', 'favorite'],
		},
		reducers
	);
	return persistedReducer;
};

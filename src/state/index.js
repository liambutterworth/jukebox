import { createStore, combineReducers } from 'redux';
import * as reducers from 'state/modules';

const configureStore = ( initialState = {} ) => {
	const rootReducer = combineReducers( reducers );
	return createStore( rootReducer, initialState );
};

export default { configureStore };

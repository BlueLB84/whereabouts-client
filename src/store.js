import { createStore, combineReducers } from 'redux';

import { firebaseReducer } from 'react-redux-firebase';
import { teamsReducer, usersReducer } from './reducers';

const rootReducer = combineReducers({
	firebase: firebaseReducer,
	teams: teamsReducer,
	users: usersReducer
});

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

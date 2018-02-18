import { createStore, combineReducers } from 'redux';

import { firebaseReducer } from 'react-redux-firebase';
import { whereaboutsReducer } from './reducers';

const rootReducer = combineReducers({
	firebase: firebaseReducer,
	whereabouts: whereaboutsReducer
});

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

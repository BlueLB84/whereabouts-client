import { createStore, combineReducers, compose } from 'redux';

import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { whereaboutsReducer } from './reducers';

import firebase from './firebase';

const config = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: false, // enable/disable Firebase's database logging
}

const rootReducer = combineReducers({
	firebase: firebaseReducer,
	whereabouts: whereaboutsReducer
});

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, config)
)(createStore)

export default createStoreWithFirebase(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

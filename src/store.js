import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { whereaboutsReducer } from './reducers';

export default createStore(whereaboutsReducer, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

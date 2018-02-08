import {createStore} from 'redux';

import {whereaboutsReducer} from './reducers';

export default createStore(whereaboutsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import Whereabouts from './components/whereabouts';
import store from './store';
import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Whereabouts />
		</Router>
	</Provider>,
document.getElementById('root')
);
 import React from 'react';
 import ReactDOM from 'react-dom';
 import {Provider} from 'react-redux';
 import Whereabouts from './components/whereabouts';
 import store from './store';
 import './index.css';

 ReactDOM.render(
 	<Provider store={store}>
	   <Whereabouts />
	</Provider>,
   document.getElementById('root')
 );
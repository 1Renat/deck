import React from 'react';
import {render} from 'react-dom';
import {createStore, allymiddleware} from 'redux';
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router' ;
import {syncHistoryWithStore} from 'react-router-redux'
import thinkMiddleWare from 'redux-thunk'
import reducer from './reducers/reduser.js'

import App from './components/App.js'

const store = createStore(reducer, allyMiddleWare(thinkMiddleWare))
const history = syncHistoryWithStore(browserHistory, store)
reducer.routing = routerReduser

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path = '/' component={App}>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
	);

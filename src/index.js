import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Routes from './routes';
import Store from './store';

import './index.css';

const StoreInstance = Store();

ReactDOM.render(
	<Provider store={StoreInstance}>
		<Routes history={browserHistory} />
	</Provider>,
	document.getElementById('root')
	);

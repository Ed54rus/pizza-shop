import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';

import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);

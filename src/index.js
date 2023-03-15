import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line
import { BrowserRouter, HashRouter } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

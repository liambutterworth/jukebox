import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from 'view/components/App';

export const rootElement = document.getElementById( 'root' );

export const RootComponent = ( store ) => (
	<Provider store={ store }>
		<Router>
			<App />
		</Router>
	</Provider>
);

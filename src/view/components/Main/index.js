import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'view/containers/Home';
import NotFound from 'view/containers/NotFound';
import './index.css';

const Main = () => (
	<main className="main">
		<Switch>
			<Route path="/" component={ Home } exact />
			<Route component={ NotFound } />
		</Switch>
	</main>
);

export default Main;

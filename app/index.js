import React from 'react';
import ReactDOM from 'react-dom';
// import ReactClass from 'create-react-class';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import './index.css';
import Main from './components/Main';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>

		</Route>
	</Router>,
	document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
// import ReactClass from 'create-react-class';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import './index.css';
import './styles/app.scss';
import Main from './components/Main';
import Weather from './components/Weather';
import About from './components/About';
import Examples from './components/Examples';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path='about' component={About} />
			<Route path='examples' component={Examples} />
			<IndexRoute component={Weather} />
		</Route>
	</Router>,
	document.getElementById('root'));

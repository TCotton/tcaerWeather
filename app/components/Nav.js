import React from 'react';
import ReactClass from 'create-react-class';
import { Link } from 'react-router';

const Nav = ReactClass({
	render: function () {
		return (
			<div>
				<h2>Nav component</h2>
				<Link to='/'>Get Weather</Link>
				<Link to='/about'>About</Link>
				<Link to='/examples'>Examples</Link>
			</div>
		);
	}
});

export default Nav;

import React from 'react';
import ReactClass from 'create-react-class';

const Nav = ReactClass({
	render: function () {
		return (
			<ul>
				<li>React Weather</li>
				<li>Get Weather</li>
				<li>About</li>
				<li>Examples</li>
			</ul>
		);
	}
});

export default Nav;

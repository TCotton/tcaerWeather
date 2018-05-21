import React from 'react';
import ReactClass from 'create-react-class';
import Nav from './Nav';
console.dir(Nav);

const Main = ReactClass({
	render: function () {
		return (
			<div>
				<Nav />
				<h2>Main component</h2>
			</div>
		);
	}
});

export default Main;



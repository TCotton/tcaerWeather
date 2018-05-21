import React from 'react';
import ReactClass from 'create-react-class';
import Nav from './Nav';

const Main = ReactClass({
	render: function () {
		return (
			<div>
				<Nav />
				<h2>Main component</h2>
				{this.props.children}
			</div>
		);
	}
});

export default Main;



import React from 'react';
import ReactClass from 'create-react-class';

const WeatherForm = ReactClass({
	onFormSubmit: function (e) {
		e.preventDefault();

	},
	render: function () {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<div>
						<input type="text" ref="name" placeholder="Enter name"/>
					</div>
					<div>
						<button>Submit</button>
					</div>
				</form>
			</div>
		);
	}
});

export default WeatherForm;

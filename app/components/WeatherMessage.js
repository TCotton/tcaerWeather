import React from 'react';
import ReactClass from 'create-react-class';

const WeatherMessage = ReactClass({
	render: function () {
		const location = this.props.location;
		const temp = this.props.temp;

		return (
			<div>
				<h3>It not {temp} in {location}</h3>
			</div>
		);
	}
});

export default WeatherMessage;

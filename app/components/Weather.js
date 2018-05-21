import React from 'react';
import ReactClass from 'create-react-class';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

const Weather = ReactClass({
	render: function () {
		return (
			<div>
				<h3>Weather components</h3>
				<WeatherForm />
				<WeatherMessage />
			</div>
		);
	}
});

export default Weather;

import React from 'react';
import ReactClass from 'create-react-class';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

const Weather = ReactClass({
	getInitialState: function() {
		return {
			location: 'Miami',
			temp: 88,
		}
	},
	handleSearch: function(location) {
		this.setState({
			location: location,
			temp: 23,
		});
	},
	render: function () {

		const location = this.state.location;
		const temp = this.state.temp;

		return (
			<div>
				<h3>Weather components</h3>
				<WeatherForm onSearch={this.handleSearch}/>
				<WeatherMessage location={location} temp={temp} />
			</div>
		);
	}
});

export default Weather;

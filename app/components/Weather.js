import React from 'react';
import ReactClass from 'create-react-class';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../api/openWeatherMap';

const Weather = ReactClass({
	getInitialState: function() {
		return {
			location: 'Miami',
			temp: 88,
		}
	},
	handleSearch: function(location) {

		openWeatherMap.getTemp(location).then((temp) => {

			this.setState({
				location: location,
				temp: temp,
			});

		}, (errorMessage) => {
			alert(errorMessage);
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

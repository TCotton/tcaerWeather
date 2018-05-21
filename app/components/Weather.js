import React from 'react';
import ReactClass from 'create-react-class';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../api/openWeatherMap';

const Weather = ReactClass({
	getInitialState: function() {
		return {
			isLoading: false
		}
	},
	handleSearch: function(location) {

		this.setState({
			loading: true
		});

		openWeatherMap.getTemp(location).then((temp) => {

			this.setState({
				location: location,
				temp: temp,
				isLoading: false,
			});

		}, (errorMessage) => {
			this.setState({
				isLoading: false,
			});
			alert(errorMessage);
		});

	},
	render: function () {

		const location = this.state.location;
		const temp = this.state.temp;
		const isLoading = this.state.isLoading;

		function renderMessage () {
			if (isLoading) {
				return <h3>Fetching weather...</h3>;
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp} />;
			}
		}

		return (
			<div>
				<h3>Weather components</h3>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

export default Weather;

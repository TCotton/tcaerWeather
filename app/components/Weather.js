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
			loading: true,
			errorMessage: undefined
		});

		openWeatherMap.getTemp(location).then((temp) => {

			this.setState({
				location: location,
				temp: temp,
				isLoading: false,
			});

		}, (e) => {
			this.setState({
				isLoading: false,
				errorMessage: e.message,
			});
		});

	},
	render: function () {

		const location = this.state.location;
		const temp = this.state.temp;
		const isLoading = this.state.isLoading;
		const errorMessage = this.state.errorMessage;

		function renderMessage () {
			if (isLoading) {
				return <h3>Fetching weather...</h3>;
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp} />;
			}
		}

		function renderError () {
			if (typeof errorMessage === 'string') {
				return (
					<ErrorModal/>
				)
			}
		}

		return (
			<div className='text-center width-25'>
				<h1>Get weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

export default Weather;

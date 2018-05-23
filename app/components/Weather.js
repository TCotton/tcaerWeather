import React from 'react';
import ReactClass from 'create-react-class';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../api/openWeatherMap';
import ErrorModal from './errorModel';

const Weather = ReactClass({
	getInitialState: function() {
		return {
			isLoading: false
		}
	},
	handleSearch: function(location) {

		this.setState({
			loading: true,
			errorMessage: undefined,
			location: undefined
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
	componentDidMount: function () {
		const location = this.props.location.query.location;

		if (location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}

	},
	componentWillReceiveProps: function(newProps) {
		const location = newProps.location.query.location;

		if (location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}

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
					<ErrorModal message='errorMessage' />
				)
			}
		}

		return (
			<div className='text-center width-25'>
				<h1 className='page-title'>Get weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

export default Weather;

import React from 'react';

const WeatherMessage = (props) => {
	const location = props.location;
	const temp = props.temp;

	return (
		<div>
			<h3>It {temp} in {location}</h3>
		</div>
	);
};

export default WeatherMessage;

import React from 'react';
import ReactClass from 'create-react-class';

const WeatherForm = ReactClass({
	onFormSubmit: function (e) {
		e.preventDefault();

		const location = this.refs.location.value;

		if (location.length > 0) {
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
	},
	render: function () {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<div>
						<input type="text" ref="location" placeholder="Enter name"/>
					</div>
					<div>
						<button className='button expanded hollow'>Submit</button>
					</div>
				</form>
			</div>
		);
	}
});

export default WeatherForm;

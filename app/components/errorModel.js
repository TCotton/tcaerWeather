import React from 'react';
import ReactClass from 'create-react-class';
import PropTypes from 'prop-types';

const ErrorModel = ReactClass({
	getDefaultProps: function() {
		return {
			title: 'Error'
		}
	},
	propTypes: {
		title: PropTypes.string,
		message: PropTypes.string.isRequired
	},
	componentDidMount: function() {
		const modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function () {
		const { title, message } = this.props;

		return(
			<div id='error-modal' className='reveal tiny tiny-center' data-reveal=''>
				<h4>{title}</h4>
				<p>{message}</p>
				<p>
					<button className='button hollow' data-close>
						Okay
					</button>
				</p>
			</div>
		)
	}
});

export default ErrorModel;

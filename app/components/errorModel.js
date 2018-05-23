import React from 'react';

import ReactClass from 'create-react-class';

const ErrorModel = ReactClass({
	componentDidMount: function() {
		const modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function () {
		return(
			<div id='error-modal' className='reveal tiny tiny-center' data-reveal>
				<h4>Some Tile</h4>
				<p>This is an error message</p>
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

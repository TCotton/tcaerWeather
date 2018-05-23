import React from 'react';
import { IndexLink } from 'react-router';
import ReactClass from 'create-react-class';

const Nav = ReactClass({
	onSearch: function (e) {
		e.preventDefault();

		const location = this.refs.search.value;
		const encodeLocation = encodeURIComponent(location);

		if (location.length > 0) {
			this.refs.search.value = '';
			window.location.hash = '#/?location=' + encodeLocation;
		}

	},
	render: function () {
		return (
			<div className='top-bar'>
				<div className='top-bar-left'>
					<ul className='menu'>
						<li>
							<IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
						</li>
						<li>
							<IndexLink to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
						</li>
						<li>
							<IndexLink to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
						</li>
					</ul>
				</div>
				<div className='top-bar-right'>
					<form onSubmit={this.onSearch}>
						<ul className='menu'>
							<li>
								<input type='search' placeholder='Search weather' ref='search' />
							</li>
							<li>
								<input type='submit' className='button' value='Get weather' />
							</li>
						</ul>
					</form>
				</div>
			</div>
		);
	}
});

export default Nav;

import React from 'react';
import { Link } from 'react-router';

const Examples = () => {
	return (
		<div className='text-center'>
			<h3>Examples</h3>
			<p>Here are a few examples to try out:</p>
			<ul>
				<li>
					<Link to='/?location=London'>London</Link>
				</li>
				<li>
					<Link to='/?location=Brazil'>Brazil</Link>
				</li>
			</ul>
		</div>
	);
};

export default Examples;

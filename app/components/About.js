import React from 'react';

const About = () => {
	return (
		<div className='text-center'>
			<h3 className='page-title'>About</h3>
			<p>This is the weather application build on React. I have built this for
			The Complete React Web App Developer Course.</p>
			<p>
				Here are some of the tools I used:
			</p>
			<ul>
				<li>
					<a href='/'>React</a> - this was the JavaScript framework used
				</li>
				<li>
					<a href='/'>Open Weather Map dot org</a>
				</li>
			</ul>
		</div>
	);
};

export default About;

import React from 'react';
import { Link } from 'react-router-dom';

const divStyle = {
	maxWidth: '500px',
	height: '300px',
	margin: '0px auto'
};
const NotFoundComponent = () => (
	<div style={divStyle}>
		<h1>Component not found</h1>
		<Link to="/">Return to Home Page</Link>
	</div>
);
export default NotFoundComponent;

import React from 'react';
import JSCharting from 'jscharting-react';

const config = {
	type: 'calendar year solid',
	data: './assets/resources/collisionInjuries2017.csv',
	title_label_text: 'Vehicular Accident Injuries 2017',
	defaultSeries_legendEntry_value: 'Total: %zSum',
	palette_colorBar_axis_scale_interval: 10,
	annotations: [
		{
			padding: 8,
			label_text:
				'Source: http://data.sanjoseca.gov/dataviews/229378/2010-2015-san-jose-crash-data/ ',
			position: 'bottom'
		}
	],
	toolbar_visible: false
};

const divStyle = {
	maxWidth: '780px',
	height: '260px',
	margin: '0px auto'
};

export default class CalendarInjuriesComponent extends React.Component {
	render() {
		return (
			<div style={divStyle}>
				<JSCharting options={config} />
			</div>
		);
	}
}

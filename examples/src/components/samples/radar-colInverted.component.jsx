import React from 'react';
import { JSCharting } from '@jscharting/jscharting-react';

const config = {
	type: 'radar polar column',
	yAxis_scale_invert: true,
	legend_visible: false,
	title: {
		position: 'center',
		label: {
			text: '2020 Sales ',
			style: {
				fontSize: 15,
				fontWeight: 'normal'
			}
		}
	},
	defaultSeries_opacity: 0.7,
	series: [
		{
			name: '2020 Sales',
			points: [
				{ name: 'Jan', y: 196 },
				{ name: 'Feb', y: 178 },
				{ name: 'Mar', y: 169 },
				{ name: 'Apr', y: 166 },
				{ name: 'May', y: 172 },
				{ name: 'Jun', y: 132 },
				{ name: 'Jul', y: 95 },
				{ name: 'Aug', y: 66 },
				{ name: 'Sep', y: 127 },
				{ name: 'Oct', y: 142 },
				{ name: 'Nov', y: 158 },
				{ name: 'Dec', y: 197 }
			]
		}
	]
};

const divStyle = {
	maxWidth: '500px',
	height: '500px',
	margin: '0px auto'
};

export default class RadarColInvertedComponent extends React.Component {
	render() {
		return (
			<div style={divStyle}>
				<JSCharting options={...config}></JSCharting>
			</div>
		);
	}
}

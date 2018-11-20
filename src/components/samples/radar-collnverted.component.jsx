import React from 'react';

import JSCharting from '../shared/jscharting.component.jsx';

const config = {
	containerWidth: '500px',
	containerHeight: '500px',
	debug: true,
	type: 'radar polar column',
	yAxis_scale_invert: true,
	chartArea_boxVisible: false,
	legend_visible: false,
	title: {
		boxVisible: false,
		position: 'center',
		label: {
			text: '2020 Sales ',
			style: { fontSize: 15, fontWeight: 'normal' }
		}
	},
	defaultSeries: {
		opacity: .7,
		defaultPoint_marker: {
			outline_color: 'white', size: 12
		}
	},
	series: [{
		name: "William",
		points: [{
			name: "Jan",
			y: 196
		}, {
			name: "Feb",
			y: 178
		}, {
			name: "Mar",
			y: 169
		}, {
			name: "Apr",
			y: 166
		}, {
			name: "May",
			y: 172
		}, {
			name: "Jun",
			y: 132
		}, {
			name: "Jul",
			y: 95
		}, {
			name: "Aug",
			y: 66
		}, {
			name: "Sep",
			y: 127
		}, {
			name: "Oct",
			y: 142
		}, {
			name: "Nov",
			y: 158
		}, {
			name: "Dec",
			y: 197
		}]
	}]
};

export default class RadarCollnvertedComponent extends React.Component {
	render() {
		return (
			<JSCharting {...config}></JSCharting>
		);
	}
}

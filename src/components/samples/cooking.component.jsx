import React from 'react';
import JSCharting from '../shared/jscharting.component.jsx';

const template = {
	box_fill: '#c2b59b',
	defaultSeries_opacity: 0,
	legend_visible: false,
	toolbar_visible: false,
	chartArea: {
		fill: 'none',
		outline_color: 'none',
		shadow: false
	},
	xAxis: {
		line_width: 0,
		defaultTick_gridLine_color: 'none',
		alternateGridFill: 'none'
	},
	yAxis: {
		visible: false,
		line_width: 0,
		defaultTick_enabled: false,
		defaultTick_gridLine_color: 'none',
		alternateGridFill: 'none'
	}
};

const config1 = {
	containerClassName: 'chart1',
	debug: true,
	type: 'horizontal column rounded',
	height: 135,
	width: 240,
	margin_bottom: -1,
	box_padding_left: -80,
	template: template,
	palette: ['#f5bd8c'],
	xAxis_defaultTick: {
		line_length: 0,
		label: {
			offset: '95,0',
			align: 'left',
			style: {
				color: 'white',
				fontSize: 14,
				fontWeight: 'bold'
			}
		}
	},
	series: [{
		name: 'Total',
		points: [
			{ name: 'Home', y: 45 },
			{ name: 'Restaurant', y: 30 },
			{ name: 'Gifts', y: 20 },
			{ name: 'Production', y: 30 },
			{ name: 'Sustenance', y: 40 }
		]
	}]
};

const config2 = {
	containerClassName: 'chart2',
	debug: true,
	defaultSeries_type: 'pie',
	palette: ['#ed6d4b', '#f29854', '#f5bd8c', '#fffcd9'],
	height: 150,
	width: 150,
	template: template,
	series: [{
		name: 'Total',
		shape: {
			size: '90%',
		},
		points: [
			{ name: 'Gifts', y: 15 },
			{ name: 'Home', y: 20 },
			{ name: 'Restaurant', y: 25 },
			{ name: 'Grown', y: 30 }
		]
	}]
};

const config3 = {
	containerClassName: 'chart3',
	debug: true,
	template: template,
	defaultSeries_type: 'pie',
	palette: ['#ed6d4b', '#f29854', '#f5bd8c', '#fffcd9'],
	height: 150,
	width: 150,
	series: [{
		name: 'Total',
		shape: {
			size: '90%',
		},
		points: [
			{ name: 'Gifts', y: 15 },
			{ name: 'Home', y: 20 },
			{ name: 'Restaurant', y: 25 },
			{ name: 'Grown', y: 30 }
		]
	}]
};

const config4 = {
	containerClassName: 'chart4',
	debug: true,
	type: 'horizontal column rounded',
	palette: ['#f5bd8c'],
	height: 245,
	box_padding_left: -102,
	template: template,
	xAxis_spacingPercentage: .1,
	xAxis_defaultTick: {
		line_length: 0,
		label: {
			align: 'left',
			offset: '110,2',
			style: {
				color: 'white',
				fontSize: 14,
				fontWeight: 'bold'
			}
		}
	},
	defaultPoint: {
		label: {
			text: '%yValue',
			visible: true,
			style_fontSize: 15,
			style_fontWeight: 'bold'
		}
	},
	series: [{
		name: 'Total',
		points: [
			{ name: 'Gifts', y: 10 },
			{ name: 'Home Baking', y: 35 },
			{ name: 'Restaurants', y: 16 }
		]
	}]
};

const config5 = {
	containerClassName: 'chart5',
	debug: true,
	defaultSeries: { type: 'pie', mouseTracking_enabled: false },
	box_fill: 'none',
	palette: ['#ed6d4b', '#f29854', '#f5bd8c', '#fffcd9'],
	height: 62,
	defaultTooltip_enabled: false,
	defaultPoint_label_text: '%yValue',
	template: template,
	margin_top: -2,
	margin_left: 3, margin_top: 0,
	series: [{
		shape: {
			size: '99%',
		},
		points: [
			{ name: '15', y: 15 },
			{ name: '20', y: 20 }
		]
	}]
};

const config6 = {
	containerClassName: 'chart6',
	debug: true,
	defaultSeries: { type: 'pie', mouseTracking_enabled: false },
	box_fill: 'none',
	palette: ['#ed6d4b', '#f29854', '#f5bd8c', '#fffcd9'],
	height: 62,
	defaultTooltip_enabled: false,
	defaultPoint_label_text: '%yValue',
	template: template,
	margin_top: -2,
	margin_left: 3, margin_top: 0,
	series: [{
		shape: {
			size: '99%',
		},
		points: [
			{ name: '45', y: 45 },
			{ name: '20', y: 20 }
		]
	}]
};

export default class CookingComponet extends React.Component {
	render() {
		return (
			<div className="complex-wrapper">
				<JSCharting {...config1}></JSCharting>
				{/* <JSCharting {...config2}></JSCharting>
				<JSCharting {...config3}></JSCharting>
				<JSCharting {...config4}></JSCharting>
				<JSCharting {...config5}></JSCharting>
				<JSCharting {...config6}></JSCharting> */}
			</div>
		);
	}
}

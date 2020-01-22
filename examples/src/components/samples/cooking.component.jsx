import React from 'react';
import { JSCharting } from 'jscharting-react';

const template = {
	box_fill: '#c2b59b',
	defaultSeries_opacity: 0,
	legend_visible: false,
	toolbar_visible: false,
	chartArea: {
		fill: 'none',
		outline_color: 'none'
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
	debug: true,
	type: 'horizontal column',
	height: 186,
	width: 240,
	margin_bottom: -1,
	template: template,
	palette: ['#f5bd8c'],
	xAxis_defaultTick: {
		line_length: 0,
		placement: 'inside',
		label: {
			style: {
				color: 'white',
				fontSize: 14,
				fontWeight: 'bold'
			}
		}
	},
	series: [
		{
			name: 'Total',
			points: [
				{ name: 'Home', y: 45 },
				{ name: 'Restaurant', y: 30 },
				{ name: 'Gifts', y: 20 },
				{ name: 'Production', y: 30 },
				{ name: 'Sustenance', y: 40 }
			]
		}
	]
};

const config2 = {
	debug: true,
	defaultSeries_type: 'pie',
	palette: ['#ed6d4b', '#f29854', '#f5bd8c', '#fffcd9'],
	height: 170,
	width: 170,
	template: template,
	series: [
		{
			name: 'Total',
			shape: {
				size: '90%'
			},
			points: [
				{ name: 'Gifts', y: 15 },
				{ name: 'Home', y: 20 },
				{ name: 'Restaurant', y: 25 },
				{ name: 'Grown', y: 30 }
			]
		}
	]
};

const config3 = {
	debug: true,
	template: template,
	defaultSeries_type: 'pie',
	palette: ['#ed6d4b', '#f29854', '#f5bd8c', '#fffcd9'],
	height: 170,
	width: 170,
	series: [
		{
			name: 'Total',
			shape: {
				size: '90%'
			},
			points: [
				{ name: 'Gifts', y: 15 },
				{ name: 'Home', y: 20 },
				{ name: 'Restaurant', y: 25 },
				{ name: 'Grown', y: 30 }
			]
		}
	]
};

const config4 = {
	debug: true,
	type: 'horizontal column',
	palette: ['#f5bd8c'],
	height: 245,
	width: 245,
	template: template,
	xAxis: {
		spacingPercentage: 0.1,
		defaultTick: {
			placement: 'inside',
			line_length: 0,
			label: {
				style: {
					color: 'white',
					fontSize: 14,
					fontWeight: 'bold'
				}
			}
		}
	},

	defaultPoint: {
		label: {
			text: '%yValue',
			color: 'white',
			style_fontSize: 15
		}
	},
	series: [
		{
			name: 'Total',
			points: [
				{ name: 'Gifts', y: 10 },
				{ name: 'Home Baking', y: 35 },
				{ name: 'Restaurants', y: 16 }
			]
		}
	]
};

const config5 = {
	debug: true,
	defaultSeries: { type: 'pie', mouseTracking_enabled: false },
	box_fill: 'none',
	palette: ['#ed6d4b', '#f29854', '#f5bd8c', '#fffcd9'],
	height: 62,
	width: 62,
	defaultTooltip_enabled: false,
	defaultPoint_label_text: '%yValue',
	template: template,
	margin_left: 3,
	margin_top: 0,
	series: [
		{
			shape: {
				size: '99%'
			},
			points: [
				{ name: '15', y: 15 },
				{ name: '20', y: 20 }
			]
		}
	]
};

const config6 = {
	debug: true,
	defaultSeries: { type: 'pie', mouseTracking_enabled: false },
	box_fill: 'none',
	palette: ['#ed6d4b', '#f29854', '#f5bd8c', '#fffcd9'],
	height: 62,
	width: 62,
	defaultTooltip_enabled: false,
	defaultPoint_label_text: '%yValue',
	template: template,
	margin_left: 3,
	margin_top: 0,
	series: [
		{
			shape: {
				size: '99%'
			},
			points: [
				{ name: '45', y: 45 },
				{ name: '20', y: 20 }
			]
		}
	]
};

export default class CookingComponet extends React.Component {
	render() {
		return (
			<div className="complex-wrapper">
				<JSCharting className="chart1" options={config1} />
				<JSCharting className="chart2" options={config2} />
				<JSCharting className="chart3" options={config3} />
				<JSCharting className="chart4" options={config4} />
				<JSCharting className="chart5" options={config5} />
				<JSCharting className="chart6" options={config6} />
			</div>
		);
	}
}

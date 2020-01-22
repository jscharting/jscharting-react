import React from 'react';
import { JSC, JSCharting } from 'jscharting-react';

// Original sample: https://jscharting.com/examples/chart-features/interactivity/master-detail-slider/

const initialView = [1990, 2015];
const configA = () => ({
	debug: true,
	title_label_text: 'Births to Unmarried Women by Age Group',
	animation: false,
	legend: {
		template: '%icon %name',
		position: 'bottom'
	},
	defaultPoint_marker_type: 'none',
	defaultSeries_mouseTracking_enabled: false,
	yAxis: {
		alternateGridFill: 'none',
		label_text: 'Number of births'
	},
	xAxis: {
		formatString: 'd',
		label_text: 'Year',
		markers: [
			{
				value: initialView,
				legendEntry_visible: false
			}
		]
	},
	toolbar_items: {
		export_visible: false,
		slider: {
			position: 'inside top',
			type: 'range',
			label_text: '1940-2015',
			visible: true,
			width: 595,
			value: initialView,
			min: 1940,
			max: 2015
			//events_change: updateDetailChart
		}
	},
	series: [
		{
			points: []
		}
	]
});

const configB = () => ({
	title_label_text: 'Detail',
	animation: false,
	debug: true,
	legend_visible: false,
	defaultPoint: {
		marker_type: 'none',
		tooltip: '%seriesName %icon %yValue'
	},
	yAxis: {
		alternateGridFill: 'none',
		label_text: 'Number of births'
	},
	xAxis: {
		crosshair_enabled: true,
		formatString: 'd',
		label_text: 'Year'
	},
	series: [
		{
			points: []
		}
	]
});

const divStyle = {
	maxWidth: '700px',
	height: '250px',
	margin: '0px auto'
};
const divStyle2 = {
	maxWidth: '700px',
	height: '400px',
	margin: '0px auto'
};

export default class MaterDetailComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { configA: configA(), configB: configB() };
		this.chart = React.createRef();
		this.chartDetail = React.createRef();
		this.data = undefined;
		this.initialView = initialView;
		this.updateDetailChart = this.updateDetailChart.bind(this);
	}

	updateDetailChart(range) {
		if (this.chart.current) {
			const chartDetail = this.chartDetail.current.instance,
				chart = this.chart.current.instance;
			//Update marker position on main chart.
			chart
				.axes('x')
				.markers(0)
				.options({ value: range });
			//Update details chart zoom
			chartDetail.axes('x').zoom(range);
		}
	}
	getSeries() {
		const me = this;
		return JSC.nest()
			.key('age_group')
			.key('year')
			.rollup('birth_number')
			.series(me.data);
	}
	componentDidMount() {
		const me = this;
		JSC.fetch('https://data.cdc.gov/resource/fvae-a8ai.csv')
			.then(function(response) {
				return response.text();
			})
			.then(function(text) {
				me.data = JSC.csv2Json(text);
				me.setState({
					configA: JSC.merge(configA(), {
						series: me.getSeries(),
						toolbar_items_slider_events_change: me.updateDetailChart
					}),
					configB: JSC.merge(configB(), {
						series: me.getSeries()
					})
				});
			});
	}

	render() {
		return (
			<div>
				<div style={divStyle}>
					<JSCharting ref={this.chart} options={this.state.configA} />
				</div>
				<div style={divStyle2}>
					<JSCharting ref={this.chartDetail} options={this.state.configB} />
				</div>
			</div>
		);
	}
}

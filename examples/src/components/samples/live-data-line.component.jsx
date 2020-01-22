import React from 'react';
import JSCharting from 'jscharting-react';

const config = {
	debug: true,
	legend_position: 'inside top right',
	yAxis_formatString: 'c',
	defaultSeries: { type: 'line', opacity: 1 },
	title_label_text: 'Data Total: %sum Average: %average',
	defaultPoint: {
		label_text: '%yValue',
		marker: {
			type: 'circle',
			size: 11,
			outline: { color: 'white', width: 2 }
		}
	},
	xAxis_overflow: 'hidden',
	margin_right: 20,
	animation: { duration: 400 },
	toolbar: {
		margin: 5,
		items: {
			'Shift Values': {
				type: 'checkbox',
				value: true,
				tooltip:
					'The shift option determines whether the first point in the series is removed when adding a new point.',
				events: { change: undefined }
			},
			Stop: {
				type: 'option',
				icon_name: 'system/default/pause',
				boxVisible: true,
				label_text: 'Pause',
				events: { change: undefined },
				states_select: {
					icon_name: 'system/default/play',
					label_text: 'Play'
				}
			}
		}
	},
	xAxis: { scale_type: 'time' },
	series: [
		{
			name: 'Purchases',
			points: [
				['1/1/2020', 29.9],
				['1/2/2020', 71.5],
				['1/3/2020', 106.4],
				['1/6/2020', 129.2],
				['1/7/2020', 144.0],
				['1/8/2020', 176.0]
			]
		}
	]
};

const divStyle = {
	maxWidth: '700px',
	height: '400px',
	margin: '0px auto'
};

export default class LiveDataLineComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = { config: config };
		this.chart = React.createRef();
		this.INTERVAL_ID = undefined;
		this.dt = new Date(2020, 0, 10).getTime();
		this.cnt = 0;
		this.useShift = true;
		this.playPause = this.playPause.bind(this);
		this.myChart = this.myChart.bind(this);
		this.start = this.start.bind(this);
		this.addData = this.addData.bind(this);
		this.shiftPoints_btnClick = this.shiftPoints_btnClick.bind(this);
	}

	myChart() {
		return this.chart.current && this.chart.current.instance;
	}

	playPause(val) {
		const me = this;
		if (val === true) {
			clearInterval(me.INTERVAL_ID);
		} else {
			me.start(me.myChart());
		}
	}

	start(chart) {
		const me = this;
		me.INTERVAL_ID = setInterval(function() {
			if (chart) {
				me.addData(chart);
				this.cnt++;
			}
		}, 800);
	}

	addData(chart) {
		const me = this;
		chart
			.series(0)
			.points.add({ y: Math.random() * 200, x: new Date(me.dt) }, { shift: me.useShift });
		me.dt = me.dt + 24 * 3600000 * 2;
	}

	shiftPoints_btnClick(shiftVal) {
		this.useShift = shiftVal;
	}

	componentDidMount() {
		const me = this;
		config.toolbar.items['Shift Values'].events.change = me.shiftPoints_btnClick;
		config.toolbar.items['Stop'].events.change = me.playPause;
		me.setState({ config: config });
	}

	componentWillUnmount() {
		window.clearInterval(this.INTERVAL_ID);
	}

	render() {
		return (
			<div style={divStyle}>
				<JSCharting ref={this.chart} options={this.state.config} callback={this.start} />
			</div>
		);
	}
}

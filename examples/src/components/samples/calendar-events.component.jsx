import React from 'react';
import { JSCharting, JSC } from 'jscharting-react';

const config = {
	type: 'calendar month solid',
	title: {
		margin_bottom: 15,
		label: {
			text: 'July 2018',
			style: {
				fontSize: 20,
				fontFamily: 'Arial',
				fontWeight: 'bold',
				color: '#0b7285'
			}
		}
	},
	yAxis_visible: false,
	legend_visible: false,
	calendar: {
		range: ['7/1/2018', '7/31/2018'],
		defaultEdgePoint: { color: 'white', label_color: '#83b2b7', mouseTracking: false }
	},
	defaultSeries: {
		shape_innerPadding: 0,
		defaultPoint: {
			tooltip_enabled: false,
			states_hover: { color: '#e3fafc' },
			label: {
				text: '<span style="align:right; font-size:14px;"><b>%name</b></span><br>%events',
				align: 'left',
				verticalAlign: 'top',
				padding: 3,
				style: {
					fontWeight: 'bold',
					color: '#1098ad',
					fontFamily: 'Arial'
				}
			},
			attributes_events: ''
		}
	}
};

const divStyle = {
	maxWidth: '900px',
	height: '600px',
	margin: '0px auto'
};

export default class CalendarEventsComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { config: config };
	}

	componentDidMount() {
		JSC.fetch('./assets/resources/events_data.csv')
			.then(response => {
				return response.text();
			})
			.then(text => {
				const data = JSC.parseCsv(text).data;
				config.series = [
					{
						points: data.map(function(row) {
							const labelText = `<br>
<span style="color:#78909c;font-size:12px; font-weight:normal">${row[2]}</span>
<br>
<span style="font-size:8px; font-weight:normal; color:#b0bec5;">
${JSC.formatDate(new Date(row[0]), 't')} - ${JSC.formatDate(new Date(row[1]), 't')}
</span>`;
							return {
								date: [row[0], row[1]],
								attributes: {
									events: [labelText]
								}
							};
						})
					}
				];

				this.setState({ config: config });
			})
			.catch(error => {
				console.error(error);
			});
	}

	render() {
		return (
			<div style={divStyle}>
				<JSCharting options={this.state.config} />
			</div>
		);
	}
}

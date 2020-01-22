import React from 'react';
import { JSCharting } from 'jscharting-react';

const data = [
	['1/1/2020', 29.9],
	['1/2/2020', 71.5],
	['1/3/2020', 106.4],
	['1/6/2020', 129.2],
	['1/7/2020', 144.0],
	['1/8/2020', 176.0]
];

const divStyle = {
	maxWidth: '700px',
	height: '400px',
	margin: '0px auto'
};

export default class MethodUpdateComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mutable: true,
			options: {
				type: 'line',
				title_label_text: 'Series updates',
				legend_position: 'inside bottom right',
				xAxis: { scale_type: 'time' },
				series: [
					{
						name: 'Purchases',
						points: randomPoints()
					}
				]
			}
		};
		this.updateData = this.updateData.bind(this);
	}

	updateData() {
		this.setState({
			options: {
				series: [
					{
						name: 'Purchases',
						points: randomPoints()
					}
				]
			}
		});
	}

	render() {
		return (
			<div style={divStyle}>
				<JSCharting options={this.state.options} mutable={this.state.mutable} />
				<button onClick={this.updateData}>Update Data</button>
			</div>
		);
	}
}

function randomPoints() {
	return data.map((row, i) => {
		// Specifying an ID for the points animates the values when point options with the same ID are updated.
		return { id: 'p' + i, x: row[0], y: Math.random() * 10 };
	});
}

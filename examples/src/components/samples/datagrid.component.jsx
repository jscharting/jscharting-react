import React from 'react';
import { JSCGrid } from 'jscharting-react';

const divStyle = {
	maxWidth: '700px',
	height: '400px',
	margin: '0px auto'
};

export default class DataGridComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			options: {
				data: [
					['Art', 5, 10],
					['Greg', 3, 6],
					['Olivia', 11, 8],
					['Steve', 11, 4],
					['Anna', 3, 8]
				],
				columns: [
					{ header: 'Name' },
					{ header: 'Value One' },
					{ header: 'Value Two' },
					{ header: 'Sum', value: '{%1+%2}' }
				]
			}
		};
	}

	render() {
		return (
			<div style={divStyle}>
				<JSCGrid options={this.state.options} />
			</div>

		);
	}
}

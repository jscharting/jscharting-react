import React from 'react';
import ReactDOM from 'react-dom';

import JSC from './jscharting-common.jsx';

export default class JSCharting extends React.Component {
	constructor(props) {
		super(props);

		this.container = React.createRef();
		this.fillContainerSize(props);
		this.instance = null;
	}

	componentDidMount() {
		this.applyProperties();
		this.drawChart();
	}

	componentWillUnmount() {
		if (this.instance) {
			this.instance.dispose();
		}
	}

	componentDidUpdate() {
		this.fillContainerSize(this.props);
		this.drawChart();
	}

	render() {
		return (
			<div ref={this.container} className={this.props.containerClassName}></div>
		);
	}

	drawChart() {
		if (this.instance) {
			this.instance.destroy();
		}

		const containerElement = ReactDOM.findDOMNode(this.container.current),
			config = Object.assign({ targetElement: containerElement }, this.props);
		this.instance = new JSC.Chart(config);
	}

	applyProperties() {
		const containerElement = ReactDOM.findDOMNode(this.container.current);
		containerElement.style.width = this.containerWidth;
		containerElement.style.height = this.containerHeight;
	}

	fillContainerSize(props) {
		if (props.containerWidth) {
			this.containerWidth = props.containerWidth;
		}

		if (props.containerHeight) {
			this.containerHeight = props.containerHeight;
		}
	}
}

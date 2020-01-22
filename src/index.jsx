import React from 'react';
import ReactDOM from 'react-dom';

import * as JSC from 'jscharting';

export default class JSCharting extends React.Component {
	constructor(props) {
		super(props);

		this.container = React.createRef();
		this.instance = null;
	}

	componentDidMount() {
		this.applyProperties();
		this.renderChart();
	}

	componentWillUnmount() {
		if (this.instance) {
			this.instance.dispose();
		}
	}

	componentDidUpdate() {
		this.renderChart();
	}

	render() {
		return (
			<div ref={this.container} className={this.props.className}></div>
		);
	}

	renderChart() {
		const cb = this.props.callback;
		const options = this.props.options || this.props;
		const ignoreStateUpdate = this.props.ignoreStateUpdate;
		const updateExisting = this.instance && this.props.mutable !== false && !this.instance.dirty;

		// Skip update if chart exists and ignoreStateUpdate is true
		if (!this.instance || !ignoreStateUpdate) {
			if (updateExisting) {
				this.instance.options(options);
			} else {
				if (this.instance) {
					this.instance.destroy();
				}
				const containerElement = ReactDOM.findDOMNode(this.container.current);
				const config = Object.assign({ targetElement: containerElement }, options);
				this.instance = new JSC.Chart(config, cb);
			}
		}
	}

	applyProperties() {
		const containerElement = ReactDOM.findDOMNode(this.container.current);
		const options = this.props.options || this.props;
		const stringifySize = size => (size && Number(size) === size) ? size + 'px' : size;
		containerElement.style.width = stringifySize(options.width) || '100%';
		containerElement.style.height = stringifySize(options.height) || '100%';
	}
}

class JSCLabel extends React.Component {
	constructor(props) {
		super(props);
		this.container = React.createRef();
	}

	componentDidMount() {
		this.renderLabel();
	}

	componentWillUnmount() {
		this.destroy();
	}

	componentDidUpdate() {
		this.renderLabel();
	}

	render() {
		return (
			<div ref={this.container} className={this.props.className}></div>
		);
	}

	destroy() {
		const containerElement = ReactDOM.findDOMNode(this.container.current);
		containerElement.innerHTML = '';
	}

	renderLabel() {
		this.destroy();

		const containerElement = ReactDOM.findDOMNode(this.container.current);
		JSC.label(containerElement, this.props.config);
	}
}

export { JSCharting, JSCLabel, JSC }
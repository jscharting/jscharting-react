import React from 'react';
import * as JSC from 'jscharting';

export default class JSCharting extends React.Component {
	constructor(props) {
		super(props);
		this.instance = undefined;
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
			<div
				ref={node => (this.container = node)}
				className={this.props.className}
			/>
		);
	}

	renderChart() {
		const cb = this.props.callback;
		const options = this.props.options || this.props;
		const ignoreStateUpdate = this.props.ignoreStateUpdate;
		const updateExisting =
			this.instance && this.props.mutable !== false && !this.instance.dirty;

		// Skip update if chart exists and ignoreStateUpdate is true
		if (!this.instance || !ignoreStateUpdate) {
			if (updateExisting) {
				this.instance.options(options);
			} else {
				if (this.instance) {
					this.instance.destroy();
				}
				const containerElement = this.container;
				const config = Object.assign(
					{ targetElement: containerElement },
					options
				);
				this.instance = new JSC.Chart(config, cb);
			}
		}
	}

	applyProperties() {
		const containerElement = this.container;
		if (containerElement) {
			const options = this.props.options || this.props;
			const stringifySize = size =>
				size && Number(size) === size ? size + 'px' : size;
			containerElement.style.width = stringifySize(options.width) || '100%';
			containerElement.style.height = stringifySize(options.height) || '100%';
		}
	}
}

class JSCLabel extends React.Component {
	constructor(props) {
		super(props);
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
			<div
				ref={node => (this.container = node)}
				className={this.props.className}
			/>
		);
	}

	destroy() {
		const containerElement = this.container;
		if (containerElement) {
			containerElement.innerHTML = '';
		}
	}

	renderLabel() {
		this.destroy();
		const containerElement = this.container;
		const options = this.props.options;
		const textProperty = options && options.text;
		JSC.label(
			containerElement,
			textProperty || options,
			textProperty && options
		);
	}
}

class JSCGrid extends React.Component {
	constructor(props) {
		super(props);
		this.instance = undefined;
	}

	componentDidMount() {
		this.renderGrid();
	}

	componentWillUnmount() {
		this.instance && this.instance.destroy();
	}

	componentDidUpdate() {
		this.renderGrid();
	}

	render() {
		return (
			<div
				ref={node => (this.container = node)}
				className={this.props.className}
			/>
		);
	}

	renderGrid() {
		const cb = this.props.callback;
		const options = this.props.options || this.props;
		const updateExisting = this.instance && this.props.mutable;

		if (updateExisting) {
			this.instance.options(options);
		} else {
			this.instance && this.instance.destroy();
			const containerElement = this.container;
			JSC.Grid(containerElement, options).then(grid => {
				this.instance = grid;
				cb && cb(grid);
			});
		}
	}
}

export { JSCharting, JSCLabel, JSCGrid, JSC };

import React from 'react';
import ReactDOM from 'react-dom';

import JSC from './jscharting-common.jsx';

export default class JSCLabel extends React.Component {
    constructor(props) {
		super(props);

		this.container = React.createRef();
	}

	componentDidMount() {
		this.drawLabel();
	}

	componentWillUnmount() {
        this.destroy();
	}

	componentDidUpdate() {
		this.drawLabel();
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

	drawLabel() {
		this.destroy();

		const containerElement = ReactDOM.findDOMNode(this.container.current);
		JSC.label(containerElement, this.props.config);
	}
}

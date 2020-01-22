import React from 'react';
import { JSCLabel } from 'jscharting-react';

export default class MicroProgressComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			labelConfig1: '',
			labelConfig2: '',
			labelConfig3: '',
			finalLabelConfig: ''
		};

		this.step = Math.floor(Math.random() * 10);
		this.stepNext = 0;
		this.progress = this.step + this.stepNext;
		this.INTERVAL_ID = undefined;
	}

	componentDidMount() {
		this.showProgress(c => this.setState({ labelConfig1: c }))
			.then(() => this.showProgress(c => this.setState({ labelConfig2: c })))
			.then(() => this.showProgress(c => this.setState({ labelConfig3: c })))
			.then(() => {
				this.setState({
					finalLabelConfig:
						'<span style="font-weight:bold; font-size:20px">The installation was successful!</span><br>'
				});
			});
	}

	componentWillUnmount() {
		clearInterval(this.INTERVAL_ID);
	}

	showProgress(configFn) {
		return new Promise(resolve => {
			this.INTERVAL_ID = setInterval(() => {
				this.stepNext = Math.floor(Math.random() * 50);
				this.progress = this.progress + this.stepNext;
				this.step = this.stepNext;
				this.updateLabel(configFn, this.progress, 2000);
				if (this.progress >= 2000) {
					clearInterval(this.INTERVAL_ID);
					this.progress = 0;
					this.step = Math.floor(Math.random() * 50);
					this.stepNext = 0;
					this.doneLabel(configFn);
					resolve();
				}
			}, Math.floor(50 + Math.random() * 10));
		});
	}

	updateLabel(configFn, progress, goal) {
		configFn(
			'<span style="font-weight:bold; font-size:18px">' +
				((progress * 100) / goal).toFixed(2) +
				'%' +
				'</span><br>' +
				'<chart width=200 type=progress data=' +
				progress +
				' max=' +
				goal +
				' color=#00e676><br>' +
				'<span style="font-size:14px">' +
				progress +
				' of ' +
				goal +
				'</span>'
		);
	}

	doneLabel(configFn) {
		configFn(
			'<span style="font-weight:bold; font-size:18px">100%</span><br>' +
				'<chart width=200 type=progress data=100 max=100 color=#00e676>' +
				'<span style="font-size:14px"> Done </span><icon name=material/navigation/check size=16 fill=green>'
		);
	}

	render() {
		return (
			<div>
				<JSCLabel config={this.state.labelConfig1} className={'progress-label'} />
				<JSCLabel config={this.state.labelConfig2} className={'progress-label'} />
				<JSCLabel config={this.state.labelConfig3} className={'progress-label'} />
				<JSCLabel config={this.state.finalLabelConfig} className={'progress-label'} />
			</div>
		);
	}
}

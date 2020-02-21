import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createHashHistory } from 'history';

import CookingComponent from './samples/cooking.component.jsx';
import CalendarEventsComponent from './samples/calendar-events.component.jsx';
import CalendarInjuriesComponent from './samples/calendar-injuries.component.jsx';
import RadarColInvertedComponent from './samples/radar-colInverted.component.tsx';
import MicroProgressComponent from './samples/micro-progress.component.jsx';
import LiveDataLineComponent from './samples/live-data-line.component.jsx';
import MethodUpdateComponent from './samples/method-update.component.jsx';
import MaterDetailComponent from './samples/master-detail.component.jsx';
import DataGridComponent from './samples/datagrid.component.jsx';
import NotFoundComponent from '../not-found.component.jsx';

import { JSC } from 'jscharting-react';

const samples = [
	{
		name: 'Cooking',
		description: 'Cooking dashboard using JavaScript charts.',
		path: '/cooking'
	},
	{
		name: 'Calendar Events',
		description: 'An events calendar based on csv data.',
		path: '/calendar-events'
	},
	{
		name: 'Calendar Injuries',
		description: 'Calendar chart from csv data file.',
		path: '/calendar-injuries'
	},
	{
		name: 'Radar Col. Inverted',
		description: 'Radar chart with inverted column series. Using .tsx file and jscharting.d.ts for code completion.',
		path: '/radar-colInverted'
	},
	{
		name: 'Micro Progress',
		description: 'Demonstrate using JSC.label() with microcharts.',
		path: '/samples/micro-progress'
	},
	{
		name: 'Live Data Update',
		description: 'Updates the chart on a timer. ',
		path: '/samples/live-data-line'
	},
	{
		name: 'Methode Update',
		description: 'Updates the chart by calling a component method and using setState(). ',
		path: '/samples/method-update'
	},
	{
		name: 'Master Detail ',
		description: 'A UI Slider control on one chart affects the zoom range on another. ',
		path: '/samples/master-detail'
	},
	{
		name: 'Data Grid',
		description: 'Demonstrate using JSC.Grid().',
		path: '/samples/data-grid'
	}
];

/**
 * Defines the URL for JSCharting resource files. Settings that all chart will inherit can be specified here as well.
 */
const setGlobalDefaults = () => JSC.defaults({ baseUrl: './assets/jscharting/', debug: true });

export default class AppComponent extends React.Component {
	constructor(props) {
		super(props);

		setGlobalDefaults();

		const samplePath = window.location.href.split('#')[1],
			sample = samplePath ? samples.filter(s => s.path === samplePath)[0] : samples[0];

		this.state = sample ? {
			sampleIndex: samples.indexOf(samples),
			sampleDescription: sample.description
		} : {};

		this.handleSampleChange = this.handleSampleChange.bind(this);
		this.history = createHashHistory();
	}

	componentDidMount() {
		let sampleIndex = samples.indexOf(
			samples.find((sample) => sample.path === this.history.location.pathname)
		);
		sampleIndex = Math.max(0, sampleIndex);
		this.setTitle(samples[sampleIndex].name);
	}

	handleSampleChange(sampleIndex) {
		const sample = samples[sampleIndex];
		this.setState({
			sampleIndex: sampleIndex,
			sampleDescription: sample.description
		});
		this.history.push(sample.path);
		this.setTitle(sample.name);
	}

	render() {

		const btnStyle = index => index === this.state.sampleIndex ? ({
			backgroundColor: '#05418c'
		}) : {};

		return (
			<Router>
				<div className="examplesHead">
					<a href="https://jscharting.com"><img src="https://jscharting.com/images/jsc-react-logo.svg" style={({width:200})} title="JSCharting" alt="JSCharting JavaScript Chart Library" /></a>
					<div className="examplesItems">
						<button style={btnStyle(0)} onClick={() => this.handleSampleChange(0)} className="examplesButton">Infographic</button>
						<button style={btnStyle(1)} onClick={() => this.handleSampleChange(1)} className="examplesButton">Calendar - Events</button>
						<button style={btnStyle(2)} onClick={() => this.handleSampleChange(2)} className="examplesButton">Calendar - Heatmap</button>
						<button style={btnStyle(3)} onClick={() => this.handleSampleChange(3)} className="examplesButton">Radar</button>
						<button style={btnStyle(4)} onClick={() => this.handleSampleChange(4)} className="examplesButton">MicroCharts</button>
						<button style={btnStyle(5)} onClick={() => this.handleSampleChange(5)} className="examplesButton">Live Data</button>
						<button style={btnStyle(6)} onClick={() => this.handleSampleChange(6)} className="examplesButton">Method Update</button>
						<button style={btnStyle(7)} onClick={() => this.handleSampleChange(7)} className="examplesButton">Master Detail</button>
						<button style={btnStyle(8)} onClick={() => this.handleSampleChange(8)} className="examplesButton">Data Grid</button>
					</div>
				</div>

				<div className="examplesDescripton">
					{this.state.sampleDescription}
				</div>

				<Switch>
					<Redirect from="/" to="cooking" exact />
					<Route path="/cooking" component={CookingComponent}/>
					<Route path="/calendar-events" component={CalendarEventsComponent}/>
					<Route path="/calendar-injuries" component={CalendarInjuriesComponent}/>
					<Route path="/radar-colInverted" component={RadarColInvertedComponent}/>
					<Route path="/samples/micro-progress" component={MicroProgressComponent}/>
					<Route path="/samples/live-data-line" component={LiveDataLineComponent}/>
					<Route path="/samples/method-update" component={MethodUpdateComponent}/>
					<Route path="/samples/master-detail" component={MaterDetailComponent}/>
					<Route path="/samples/data-grid" component={DataGridComponent}/>
					<Route path="*" component={NotFoundComponent}/>
				</Switch>
			</Router>
		);
	}

	setTitle(title) {
		document.title = title;
	}
}

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createHashHistory } from 'history';

import CookingComponent from './samples/cooking.component.jsx';
import CalendarEventsComponent from './samples/calendar-events.component.jsx';
import CalendarInjuriesComponent from './samples/calendar-injuries.component.jsx';
import RadarCollnvertedComponent from './samples/radar-collnverted.component.jsx';

const samples = [
	// {
	// 	name: 'Cooking',
	// 	description: 'Cooking dashboard using JavaScript charts.',
	// 	path: '/cooking'
	// },
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
		description: 'Radar chart with inverted column series.',
		path: '/radar-collnverted'
	}
];

export default class AppComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sampleIndex: 0,
			sampleDescription: samples[0].description
		};
		this.handleSampleChange = this.handleSampleChange.bind(this);
		this.history = createHashHistory();
	}

	componentDidMount() {
		let sampleIndex = samples.indexOf(
			samples.find((sample) => sample.path === this.history.location.pathname)
		);

		if (sampleIndex < 0) {
			sampleIndex = 0;
		}

		this.setState({
			sampleIndex: sampleIndex,
			sampleDescription: samples[sampleIndex].description
		});
		this.setTitle(samples[sampleIndex].name);
	}

	handleSampleChange(e) {
		const sampleIndex = e.target.value;
		const sample = samples[sampleIndex];

		this.setState({
			sampleIndex: sampleIndex,
			sampleDescription: sample.description
		});
		this.history.push(sample.path);
		this.setTitle(sample.name);
	}

	render() {
		return (
			<Router>
				<div>
					<div>
						<label>
							Samples:
							<select onChange={this.handleSampleChange} value={this.state.sampleIndex}>
								{samples.map((option, index) => {
									return <option key={index} value={index}>{option.name}</option>
								})}
							</select>
						</label>
						<div>
							{this.state.sampleDescription}
						</div>
					</div>
					<Switch>
						<Redirect from="/" to="calendar-events" exact />
						{/* <Route path="/cooking" component={CookingComponent}></Route> */}
						<Route path="/calendar-events" component={CalendarEventsComponent}></Route>
						<Route path="/calendar-injuries" component={CalendarInjuriesComponent}></Route>
						<Route path="/radar-collnverted" component={RadarCollnvertedComponent}></Route>
					</Switch>
				</div>
			</Router>
		);
	}

	setTitle(title) {
		document.title = title;
	}
}

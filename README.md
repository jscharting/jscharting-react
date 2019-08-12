# JSCharting: Any Chart. Anywhere.

<a href="https://jscharting.com"><img src="https://jscharting.com/images/logo_short.svg" style="margin:0px" align="left" hspace="10" vspace="6" width="200" ></a>

**JSCharting** is a JavaScript chart library for visualizing your data, providing resolution 
independent results across all devices and platorms. Every JSCharting license includes the 
full suite of 150+ advanced chart types, interactive stock charts and JSMapping at no additional charge.

## Official JSCharting Samples for React

This set of samples demonstrate how to use JSCharting with React library. Samples are located in the `src/components/samples` folder.

### How to use

Install the necessary packages including JSCharting.

```console
npm install
```

Run the webpack dev server: localhost:8080

```console
npm run start
```

Or build the dashboard manually.

```console
npm run build
```

Or.

```console
npm run build-prod
```

### How it works

The webpack build copies all needed resources to the ./dist/ folder. A component of the charting library is created in ./src/components/shared/jscharting.component.jsx to provide a simple way of library usage.

```javascript
import React from 'react';

import JSCharting from '../shared/jscharting.component.jsx';

const config = {
	...
};

export default class AppComponentComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { config: config };
	}

	componentDidMount() {
		fetch('./assets/resources/events_data.csv')
				.then((response) => {
					return response.text();
				})
				.then((text) => {
					const data = parseCsv(text).data;
					config.series = [{
						points: data.map(function (row) {
							...
						})
					}];

					this.setState({ config: config });
				})
				.catch((error) => {
					console.error(error);
				});
	}

	render() {
		return (
			<div>
				<JSCharting {...config}></JSCharting>
			</div>
		);
	}
}
```

----

Please see full samples in the `src/components/samples` folder.

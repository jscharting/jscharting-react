# JSCharting: Any Chart. Anywhere.

<a href="https://jscharting.com"><img src="https://jscharting.com/images/logo_short.svg" style="margin:0px" align="left" hspace="10" vspace="6" width="200" ></a>

**JSCharting** is a JavaScript chart library for visualizing your data, providing resolution 
independent results across all devices and platorms. Every JSCharting license includes the 
full suite of 150+ advanced chart types, interactive stock charts and JSMapping at no additional charge.

## Official JSCharting Samples for React

This set of samples demonstrate how to use JSCharting with React library. Samples are located in the `src/components/samples` folder.

### How to use

1) Use `<script>` tags in your HTML file to load JSCharting.

```html
<script type="text/javascript" src="https://code.jscharting.com/2.7.0/jscharting.js"></script>
```

2) In your react component import JSCharting.

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
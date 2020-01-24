# JSCharting for React

![npm](https://img.shields.io/npm/v/jscharting-react)
![David](https://img.shields.io/david/jscharting/jscharting-react)
![Twitter Follow](https://img.shields.io/twitter/follow/jscharting?label=Follow&style=social)

<a href="https://jscharting.com"><img src="https://jscharting.com/images/logo_short.svg" style="margin:0px" align="left" hspace="10" vspace="6" width="200" ></a>

**JSCharting** is a JavaScript data visualization library offering seamless usage with React across all devices and platforms. Every JSCharting license includes a full suite of 150+ chart types including standards such as pie charts, line charts, donut and bar charts. In addition, advanced chart types including Gantt charts, JavaScript Org Charts, interactive charts for stock and finance, seamless grid and calendar charts, JavaScript maps, and micro charts all for no additional charge. JSCharting has all the features you need and many you don't yet know you want.

Example Charts: 
[Chart Types](https://jscharting.com/examples/chart-types/)
| [Feature Examples](https://jscharting.com/examples/chart-features/)

## Official JSCharting plugin for ReactJS
A react wrapper to use [JSCharting](https://jscharting.com/) charting library as a react chart component.
## Table of Contents

1. [Install](#install)
    1. [Run Examples](#run-examples)
2. [Usage](#usage)
    1. [Simple Example](#simple-example)
    2. [JSCharting with Typescript](#jscharting-with-typescript)
    3. [Upating Charts](#updating-charts)
        1. [Using setState()](#using-setstate)
        2. [Bypassing setState()](#bypass-setstate---updating-chart-directly)
3. [Chart resources](#chart-resources)
4. [Getting a chart reference](#getting-a-chart-reference)
5. [JSCLabel Component](#jsclabel-component)



### Install

Install the jscharting-react plugin.

```console
npm i -D jscharting-react
```

#### Run Examples
Clone the github repo locally. Example charts are located in the `/examples` folder.

To view the examples you can run the webpack dev server: localhost:8080

```console
npm run start-examples
```

Or build the project manually.

```console
npm run build-examples
```


### Usage

#### Simple example
This example shows how you can use the `JSCharting` component of the `jscharting-react` module to make a bar chart.

```jsx 
import React from 'react';
import { JSCharting } from 'jscharting-react';

const config = {
    type: 'horizontal column',
    series: [
        {
            points: [
                { x: 'A', y: 50 },
                { x: 'B', y: 30 },
                { x: 'C', y: 50 }
            ]
        }
    ]
};

const divStyle = {
	maxWidth: '700px',
	height: '400px',
	margin: '0px auto'
};

export default class SimpleChartComponent extends React.Component {
    render() {
        return (
            <div style={divStyle}><JSCharting options={config} /></div>
        );
    }
}

```

This line chart example binds the chart to the components state. With this setup you can call the 
component `setState()` function to update the chart. See the [Updating Chart](#updating-charts) section 
for more information on using the `mutable` option. 

```jsx
import React from 'react';
import { JSCharting } from 'jscharting-react';

const config = {
    type: 'line',
    series: [
        {
            points: [
                { x: 'A', y: 50 },
                { x: 'B', y: 30 },
                { x: 'C', y: 50 }
            ]
        }
    ]
};

export default class SimpleChartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: config, 
            mutable: false
        };
    }
    render() {
        return (
            <div><JSCharting options={this.state.options} mutable={this.state.mutable} /></div>
        );
    }
}
```



#### JSCharting with TypeScript

The following area chart example demonstrates how you can use the JSCharting declarations for code completion in TypeScript (.tsx) files.
```tsx
import * as React from 'react';
import { JSC, JSCharting } from 'jscharting-react';

const config: JSC.JSCChartConfig = {
    type: 'area',
    series: [
        {
            name: '2020 Sales',
            points: [
                { name: 'Jan', y: 196 },
                { name: 'Feb', y: 178 },
                { name: 'Mar', y: 169 },
            ]
        }
    ]
}
export default class typeScriptComponent extends React.Component {
    render() {
        return (
            <div><JSCharting options={config} /></div>
        );
    }
}
```
You can check out the radar example in the `examples/` react application which uses Typescript and the declarations file.

#### JSCharting Component Options
These configurable options are available with the `JSCharting` component.

| Parameter | Type |  Description |
| --------- | :----: | ----------- |
| `options` | object | JSCharting chart configuration object. Please refer to the [API documentation](https://jscharting.com/documentation/#node=Home.API.json.Chart). |
| `mutable` | boolean | (Optional) When set to true, `chart.options()` is called with the updated props instead of recreating the chart object. 
| `callback` | function | (Optional) Function that is called when the chart is finished rendering. The first argument of the callback function is a reference to the created chart.|
| `ignoreStateUpdate` | boolean | (Optional) `false` by default. When `true`, the chart will ignore updates applied when setState() is called. This is useful when you want to update the chart directly and use `setState()` for other elements of the component. |
| `className` | string | (Optional) Applies the class name to the chart container div element. It allows controlling chart size and layout with external CSS. |


#### Updating charts

There are a couple ways to update live charts. 

##### Using setState()

The `setState()` chart updates operate in two modes. When the component option ` mutable` is true, only new options set 
through the `setState()` function are passed to the chart using chart.options(). When `mutable` is false,  setState will 
reset the chart with a new instance. 

Charts with `mutable == true` option perform better and allow charts to animate changes. Only new options that are changing 
need to be passed to the chart. You can animate chart updates using this more.

Using `mutable == false` is sometimes useful when a chart must be drastically modified. In this mode, all options should be
 available in the state object for a new chart instance to use.

See [animating series and points](https://jscharting.com/tutorials/types/js-series-point-animation-chart/) for more information.

```jsx 
export default class setStateUpdateComponent extends React.Component {
constructor(props) {
        super(props);
        this.state = {
            mutable: true,
            options: {
                series: [
                    {
                        name: 'Purchases',
                        points: randomPoints()
                    }
                ]
            }
        };
        this.updateData = this.updateData.bind(this);
    }
    updateData() {
        this.setState({
            options: {
                series: [
                    {
                        name: 'Purchases',
                        points: randomPoints()
                    }
                ]
            }
        });
    }
    render() {
        return (
            <div style={divStyle}>
                <JSCharting options={this.state.options} mutable={this.state.mutable} />
                <button onClick={this.updateData}>Update Data</button>
            </div>
        );
    }
}
```

##### Bypass setState() - Updating chart directly

JSCharting has a rich API for interacting with chart elements programatically. this approach is more flexible and can 
update the chart more efficiently when performance is a priority. Charts can also be decoupled from setState updates 
and managed independently.

Set the `ignoreStateUpdate` option to true when you  want to use `setState()` for other purposes but not affect the chart itself.

See [getting a chart reference](#getting-a-chart-reference). Once a chart reference is available, you can update chart options as needed with code such as:

```js
chart.series().points(p=>p.y>50).options({color: 'red'})
```

This line will make all points on a chart with y values greater than 50 red. Another example:

```js
chart.series(0).points(0).options({y: 100})
```

This selects the first point in the first series and changes the point's y value to 100.

In contrast, the `setState()` method with `mutable==true` can only call `chart.options()`.

```jsx 
export default class directUpdateComponent extends React.Component {
constructor(props) {
        super(props);
        this.state = {
            mutable: true,
            options: {
                series: [
                    {
                        name: 'Purchases',
                        points: randomPoints()
                    }
                ]
            }
        };
        this.chart = React.createRef();
        this.updateData = this.updateData.bind(this);
    }
    updateData() {
        const chart = this.chart.current && this.chart.current.instance;
        if(chart){
            chart.series('Purchases').options({points: randomPoints()})
        }
    }
    render() {
        return (
            <div>
                <JSCharting ref={this.chart} options={this.state.options} mutable={this.state.mutable} />
                <button onClick={this.updateData}>Update Data</button>
            </div>
        );
    }
}
```

### Chart resources
The JSCharting library includes resources (modules, mapping data, polyfills, icons library) that load automatically 
when they are needed. The examples webpack build copies these resources to the `./dist/jsc/` folder. 
The examples app component `examples/src/components/app.component.jsx` file calls the `JSC.defaults()` function to set `baseUrl` option with this path globally in 
its constructor. All subsequent charts will be aware of the location of these resources. 

```jsx
import { JSC } from 'jscharting-react';
JSC.defaults({ baseUrl: 'dist/jsc', debug:true });
```

**Note:** If the chart does not find the resources path, it will download them from a CDN. 
Setting `debug:true` in the `JSC.defaults()` function during development is recommended as it will alert you when the 
CDN fallback is used. It is recommended to use a local copy of resources in production.

### Getting a chart reference

You can get a chart instance using the `React.createRef` method:
```jsx 
export default class LiveDataLineComponent extends React.Component {
    constructor(props) {
        super(props);
        this.chart = React.createRef();
    }
    render() {
        return (
            <div style={divStyle}>
                <JSCharting ref={this.chart} options={config} />
            </div>
        );
    }
}
```

You can also store it when a chart callback function is executed.

```jsx 
export default class LiveDataLineComponent extends React.Component {
    constructor(props) {
        super(props);
        this.chartCallback = this.chartCallback.bind(this);
    }
    chartCallback(chart){
        this.chart = chart;
    }
    componentDidMount() {
        // Using the chart reference. 
        this.chart && 
            this.chart.series.push({name: 'S1', points:[ {x:5,y:10}, {x:5,y:10}] });
    }
    render() {
        return (
            <div style={divStyle}>
                <JSCharting options={config} callback={this.chartCallback} />
            </div>
        );
    }
}
```


### JSCLabel Component
This plugin also contains an implementation of the `JSCLabel` component for react. 
It can be used to create very efficient microchart SVG images in your react projects. 
Here's a simple example.

```jsx

import { JSCLabel } from 'jscharting-react';

export default class MicroChartComponent extends React.Component {
    render() {
        const data = [5,2,3,5,1];
        return (
            <div>
                <JSCLabel config={`<chart arealine data=${data} width=200 height=50>`} />
            </div>
        );
    }
}

```

See the [microcharts tutorial](https://jscharting.com/tutorials/types/js-microcharts/) for configuration syntax and more information.


import * as React from 'react';
import * as JSC from 'jscharting';

export interface JSChartingComponentProps extends React.Props<any> {
    /**
     * JSCharting chart configuration object.
     * See Also:
     * {@link https://jscharting.com/documentation/#node=Home.API.json.Chart | API Documentation.}
     */
    options: any;
    /**
     * (Optional) When set to true, chart.options() is called with the updated props instead of recreating the chart object.
     */
    mutable?: boolean;
    /**
     * (Optional) Function that is called when the chart is finished rendering. The first argument of the callback function is a reference to the created chart.
     */
    callback?: Function;
    /**
     * (Optional) false by default. When true, the chart will ignore updates applied when setState() is called. This is useful when you want to update the chart directly and use setState() for other elements of the component.
     */
    ignoreStateUpdate?: boolean;
    /**
     * (Optional) Applies the class name to the chart container div element. It allows controlling chart size and layout with external CSS.
     */
    className?: string;
}

export interface JSCLabelComponentProps extends React.Props<any> {
    /**
     * JSCLabel configuration.
     * See Also:
     * {@link https://jscharting.com/tutorials/types/js-microcharts/ | API Documentation.}
     */
    config: any;
    /**
     * (Optional) Applies the class name to the chart container div element. It allows controlling chart size and layout with external CSS.
     */
    className?: string;
}

export default class JSCharting extends React.Component<JSChartingComponentProps> {
    private container;
    private instance;
    constructor(props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    renderChart(): void;
    applyProperties(): void;
}
declare class JSCLabel extends React.Component<JSCLabelComponentProps> {
    private container;
    constructor(props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    destroy(): void;
    renderLabel(): void;
}
export { JSCharting, JSCLabel, JSC };

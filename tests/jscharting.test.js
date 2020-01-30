import React from 'react';
import { JSCharting } from '../src/index';
import renderer from 'react-test-renderer';

const options = {
	series: [
		{
			points: [
				[0, 1],
				[1, 2]
			]
		}
	]
};

let isCallbackInvoked = false;
const callback = () => {
	isCallbackInvoked = true;
};

describe('JSCharting unit tests', () => {
	const componentRenderer = renderer.create(<JSCharting options={options} callback={callback} />);
	const component = componentRenderer.getInstance(),
		chart = component.instance;

	test('Chart instance was created', () => {
		expect(chart).not.toBeUndefined();
	});

	test('Callback should be invoked.', () => {
		expect(isCallbackInvoked).toBeTruthy();
	});

	test('Chart should be destroyed after component is unmounted.', () => {
		componentRenderer.unmount();
		expect(chart.getWrapper()).toBeUndefined();
	});
});

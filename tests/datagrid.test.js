import React from 'react';
import { JSCGrid } from '../dist/jscharting-react.es';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

const options = {
	title: 'DataGrid Title',
	data: [
		['Art', 5, 10],
		['Greg', 3, 6],
		['Olivia', 11, 8],
		['Steve', 11, 4],
		['Anna', 3, 8]
	]
};

let isCallbackInvoked = false;
const callback = () => {
	isCallbackInvoked = true;
};

describe('JSCGrid unit tests', () => {
	test('JSCGrid is rendered', async () => {
		const { getByText } = render(<JSCGrid options={options} />);

		const title = await waitForElement(() => getByText(options.title));
		expect(title).toBeInTheDocument();
	});

	test('Callback should be invoked.', async () => {
		const { getByText } = render(
			<JSCGrid options={options} callback={callback} />
		);
		await waitForElement(() => getByText(options.title));
		expect(isCallbackInvoked).toBeTruthy();
	});

	test('DataGrid should be destroyed after component is unmounted.', async () => {
		const { unmount, container, getByText } = render(
			<JSCGrid options={options} />
		);
		await waitForElement(() => getByText(options.title));
		unmount();
		expect(container.innerHTML).toBe('');
	});
});

import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
const fs = require('fs');

import pkg from './package.json';

(function () {
	if (!fs.existsSync('dist')){
		fs.mkdirSync('dist');
	}
	const file = fs.readFileSync('src/index.d.ts');
	fs.writeFileSync('dist/jscharting-react.d.ts', file);
}());

export default {
	input: 'src/index.jsx',
	output: [
		{
			file: pkg.main,
			format: 'cjs',
			sourcemap: true,
			exports: 'named'
		},
		{
			file: pkg.module,
			format: 'es',
			sourcemap: true,
			exports: 'named'
		}
	],
	plugins: [
		babel({
			exclude: "node_modules/**"
		}),
		resolve(),
		commonjs()
	],
	external: ['react', 'react-dom', 'jscharting', 'prop-types']
};

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const plugins = [
    babel({
        exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
];

// List of module IDs to exclude
const external = Object.keys(
    Object.assign({}, pkg.dependencies)
);

export default {
    input: 'index',
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'es' }
    ],
    plugins,
    external
};
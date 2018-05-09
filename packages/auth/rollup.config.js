import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import pkg from './package.json';

const plugins = [
    resolve({
        jsnext: true,
        main: true,
        browser: true,
    }),
    commonjs(),
    eslint(),
    babel({
        exclude: 'node_modules/**'
    }),
];

// List of module IDs to exclude
const external = Object.keys(
    Object.assign({}, pkg.dependencies)
);

export default {
    input: 'src/index',
    output: [
        {
            file: pkg.main,
            format: 'cjs'
        },
        {
            file: pkg.module,
            format: 'es'
        },
        {
            file: 'dist/index.min.js',
            name: 'LimsAuth',
            format: 'iife',
            sourcemap: true
        }
    ],
    plugins,
    external
};
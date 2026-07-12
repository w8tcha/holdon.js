import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import banner from 'vite-plugin-banner';
import autoprefixer from 'autoprefixer';

export default defineConfig({
	plugins: [
		dts(), 
		banner(`/**
 * holdOn.js ${process.env.npm_package_version}
 * https://github.com/w8tcha/holdon.js
 * @license MIT
 */`)
	],
	css: {
	postcss: {
		plugins: [
			autoprefixer({}) // add options if needed
		],
	}
},
	build: {
		lib: {
			entry: './src/holdOn.ts',
			name: 'holdOn',
			fileName: 'holdOn',
			formats: ['es', 'iife', 'umd']
		},
		rollupOptions: {
			external: ['bootstrap'],
			output: {
				globals: {
					bootstrap: 'bootstrap'
				},
				exports: 'named'
			},
		},
		sourcemap: true
	}
});
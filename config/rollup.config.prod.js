import { readFileSync } from 'fs';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';

const pkg = JSON.parse( readFileSync( 'package.json', 'utf-8' ) );

export default {
  entry: `./build/src/${pkg.name}.js`,
  plugins: [
      uglify({}),
      buble({exclude: './node_modules/**'}),
		  replace({ 'process.env.NODE_ENV': JSON.stringify('production') })
  ],
  sourceMap: false,
  moduleName: pkg.name,
  targets: [
    {  dest: `./dist/${pkg.name}.min.js`, format: 'umd' }
  ]
};


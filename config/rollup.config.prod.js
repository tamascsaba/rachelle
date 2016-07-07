import { readFileSync } from 'fs';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';

const pkg = JSON.parse( readFileSync( 'package.json', 'utf-8' ) );

export default {
  entry: `./dist/${pkg.name}.js`,
  plugins: [
      uglify({
        warnings: false,
        compress: {
					screw_ie8: true,
					dead_code: true,
					unused: true,
					drop_debugger: true
				}
      }),
      buble({exclude: './node_modules/**'}),
		  replace({ 'process.env.NODE_ENV': JSON.stringify('production') })
  ],
  sourceMap: false,
  moduleName: pkg.name,
  targets: [
    {  dest: `./dist/${pkg.name}.es5.min.js`, format: 'umd' }
  ]
};


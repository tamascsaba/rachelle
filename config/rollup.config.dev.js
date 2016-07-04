import { readFileSync } from 'fs';
import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';

const pkg = JSON.parse( readFileSync( 'package.json', 'utf-8' ) );

const banner = readFileSync( 'banner.js', 'utf-8' )
	.replace( '${name}', pkg.name )
  .replace( '${version}', pkg.version )
  .replace( '${author}', pkg.author )
  .replace( '${homepage}', pkg.homepage )

export default {
  entry: `./build/src/${pkg.name}.js`,
  plugins: [
      buble({exclude: './node_modules/**'}),
		  replace({ 'process.env.NODE_ENV': JSON.stringify('development') })
  ],
  banner:  banner,
  sourceMap: false,
  moduleName: pkg.name,
  targets: [
      {  dest: `./dist/${pkg.name}.js`, format: 'umd' }
  ]
};


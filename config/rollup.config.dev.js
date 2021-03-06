import { readFileSync } from 'fs';
import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import typescript from 'rollup-plugin-typescript';
import ts from 'typescript';

const pkg = JSON.parse( readFileSync( 'package.json', 'utf-8' ) );

const banner = readFileSync( 'banner.js', 'utf-8' )
	.replace( '${name}', pkg.name )
  .replace( '${version}', pkg.version )
  .replace( '${author}', pkg.author )
  .replace( '${homepage}', pkg.homepage )

export default {
  entry: `./src/${pkg.name}.ts`,
  plugins: [
      typescript({
        typescript: ts
    }),
      buble({exclude: './node_modules/**'}),
		  replace({ 'process.env.NODE_ENV': JSON.stringify('development') })
  ],
  banner:  banner,
  moduleName: pkg.name,
  format: 'umd',
  dest: pkg.main
};


# Rachelle

[![Build Status](https://travis-ci.org/Kflash/rachelle.svg?branch=master)](https://travis-ci.org/Kflash/rachelle)
[![CircleCI](https://circleci.com/gh/Kflash/rachelle.svg?style=svg)](https://circleci.com/gh/Kflash/rachelle)
[![Coverage Status](https://coveralls.io/repos/github/Kflash/rachelle/badge.svg?branch=master)](https://coveralls.io/github/Kflash/rachelle?branch=master)
[![codecov](https://codecov.io/gh/Kflash/rachelle/branch/master/graph/badge.svg)](https://codecov.io/gh/Kflash/rachelle)
[![npm version](https://badge.fury.io/js/rachelle.svg)](https://badge.fury.io/js/rachelle)
[![npm downloads](https://img.shields.io/npm/dm/rachelle.svg)](https://www.npmjs.org/package/rachelle)
[![npm](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://github.com/kflash/rachelle/blob/master/LICENSE.md)

> Fast, compact and lightweight `TypeScript 2.0` boilerplate that export a single file.

This boilerplate uses `TypeScript 2.0` by default, and `Rollup + Buble` to bundle a nice flat production bundle.
`Mocha + Chai + Sinon` are used as the testing stack. Unit tests can be run with or without [`JSDOM`](https://github.com/tmpvar/jsdom).

Estimated bundle time: `0.3 ms`. (*Depends on your computer.*)

## Features

- [x] Statically typed build system for working with [Typescript](https://www.typescriptlang.org/) 2.0 Pre
- [x] Consistent code style with [TSLint](https://palantir.github.io/tslint/).
- [x] Coverage report with [Istanbul](https://github.com/gotwarlost/istanbul)
- [x] Dead code elimination
- [x] VSCode integration
- [x] Optional [JSDOM](https://github.com/tmpvar/jsdom)
- [x] [Rollup](http://rollupjs.org/) for bundling
- [x] [Bublé](https://gitlab.com/Rich-Harris/buble) as the ES2015 compiler
- [x] [Sinon](http://sinonjs.org/) for test doubles
- [x] [Mocha](https://mochajs.org/) & [Chai](http://chaijs.com/) de facto standard
- [x] JSX
- [x] Environment variabels
- [x] Easy debugging

## Getting started

The only development dependency of this project is [Node.js](https://nodejs.org/en/). So just make sure you have it installed.
Then type few commands known to every Node developer...

```bash
git clone --depth 1 https://github.com/kflash/rachelle.git
cd rachelle
# install the project's dependencies
npm install

# bundle both a development and production bundle
npm build
```
... and boom! You have it all setup for you!

## NPM

- `build` - creates a development and production bundle
- `build:dev`  - creates a development bundle
- `build:prod` - creates a production bundle
- `coverage` - shows the coverage report
- `clean` - remove the dist, coverage and build folders
- `clean:build` - remove the build folder
- `test` - run all unit tests in the node.js environment
- `test:jsdom` - run all unit tests in the node.js environment with jsdom
- `lint` - validates all source and test files
- `lint-src` - validates all source files
- `lint-tests` - validates all test files
- `release` - build the library, push to NPM and Github
- `watch:tests` - run all unit tests and watch files for changes
- `watch:build` - watch your TypeScript files and trigger recompilation on changes
- `update:dependencies` - update npm packages

## Usage
You can simply use this project as a drop-in replacement for any TypeScript projects if you need something fast, and lightweight. Just replace the `./src` and `./test` folder and it should work right out of the box.

Both `Travis CI` and `Circle CI` are supported.

## Coverage reports

The coverage reports are generated with `Istanbul`, and delivered to `coveralls.io` and `codecov` by `Travis CI`.

Istanbul generate a 100% correct coverage report. See the source and test files and do a comparison.

## FAQ

#### Can this boilerplate be used together with React?

Yes. `Bublé` supports JSX, and in fact React are now swapping out Browserify with Rollup. You can read more about it here - [`React - PR #7178`](https://github.com/facebook/react/pull/7178).

#### How to use this boilerplate with Karma?

NPM install the `Karma` package and type `karma init` on the command line. The test files are pre-transpilled by `TypeScript` and located here `build/test/specs/**/*.js`.
Install a `Karma` preprocessor, and the NPM packages you may need.

#### Is JSX supported?

Yes. Both `TSX` and `JSX`. By default `Bublé` are configured to be used with `React`. You may change this inside the `rollup.config.js` file.

#### Why is everything so strict?

What do you mean? The `TypeScript` compiler have it's rules to follow, as well as `TSLint`. Everytime you bundle, run a watch task or
run the unit tests, things get validated. You can't compile the source code or run unit tests if there are errors in your code.

#### When should I consider using this boilerplate?

You may consider this is if you need a lightweight, fast boilerplate that export a single file.

#### What's the browser compatibility?

As a rule of thumb, `TypeScript` works best in `IE9` and above.

#### Do I need to customize this boilerplate?

Nope. You only have to change the name on the boilerplate in the `package.json`.

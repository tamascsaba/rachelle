## Changelog

# 0.6.9

- fixed issue with node-modules when using Karma
- fixed issue with the "watch:build" task
- updated NPM packages

# 0.6.7

- refactored Travis

# 0.6.5

- don't exclude all NPM packes in node-modules

# 0.6.3

- fixed issues with bundling

# 0.6.2

- fixed sinon issue

# 0.6.0

- removed common.js support
- splitted prod and dev bundles into separate files.
- updated NPM packages

# 0.5.3

- fixed issue with debug mode in VSCode
- run linting in parallel
- simplified

# 0.5.2

- added settings for the VSCode editor.
- Moved --outDir to tsconfig.json, and removed from package.json

# 0.5.1

- changed how environment variabels work. Don't trust Rollup on that one!
- added support for VSCode
- added debugging task for use with VSCode
- build tasks now runs in paralell
- NPM packages updates
- minor cleanup

# 0.5.0

- BC!! removed shell scripts
- BC!! made it Windows friendly

# 0.4.4

- changed a few TSLint rules
- update NPM packages

# 0.4.3

- Enabled dead code elimination when transpiling with TypeScript

# 0.4.2

- JSDOM is now optional. Standard tests are running without JSDOM. `npm run test:jsd` runs the tests with `JSDom`

# 0.4.0

- improved JSDom configuration
- tests can now be in sub-directories
- jsx / tsx supported in tests
- improved `∼./test/mocha.opts` configuration

# 0.3.6

- solved issue where Mocha watch task wasn't working

# 0.3.5

- fixed script issue

# 0.3.3

- fixed issue with the release script

# 0.3.2

- fixed mocha configuration

# 0.2.13

- updated readme

#  0.2.11

- rolled back Node.js check in Travis.
- improved command scripts

#  0.2.8

- unit testing now support both`.ts` and `.tsx` files

#  0.2.7

- only delete dist folder on build.
- improved perf

#  0.2.4

- put a blocker for node.js version older then 5.x. The script will stop.
- moved coverage report commands to the after.sh file.

#  0.2.3

- updated readme

# 0.2.2

- updated readme

# 0.2.1

- Simplified CI support

# 0.2.0

- refactored Rollup bundling
- cleanup
- updated NPM packages

# 0.1.7

- added prepublish script
- cleanup

# 0.1.5

- simplified Rollup bundling

# 0.1.4

- added Sinon support with examples

# 0.1.2

- fixed so the library name are taken from package.json

# 0.1.1

- simplified Rollup configuration
- reduced the dependency tree
- speeding up build process
- cleanup

# 0.0.5

- added release script
- updated readme

# 0.0.1
- first release
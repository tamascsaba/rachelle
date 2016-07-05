#!/usr/bin/env bash

set -ex -o pipefail

# Setup environment
cd `dirname $0`
source ./env.sh
cd ../..

# Push to coveralls.io
cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js
## Push to codecov
./node_modules/.bin/codecov
# Remove the coverage files and the directory
rm -rf ./coverage
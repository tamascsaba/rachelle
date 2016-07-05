#!/usr/bin/env bash

set -e -o pipefail

NODE_VERSION=6.2.2
NPM_VERSION=3.10.4

if [[ ${TRAVIS} ]]; then
  # used by xvfb that is used by Chromium
  export DISPLAY=:99.0

  # Use newer verison of GCC to that is required to compile native npm modules for Node v4+ on Ubuntu Precise
  # more info: https://docs.travis-ci.com/user/languages/javascript-with-nodejs#Node.js-v4-(or-io.js-v3)-compiler-requirements
  export CXX=g++-4.8

  # Used by karma and karma-chrome-launcher
  export CHROME_BIN=${HOME}/.chrome/chromium/chrome-linux/chrome
fi
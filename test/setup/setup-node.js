//inject mocha globally to allow custom interface refer without direct import - bypass bundle issue
global.mocha = require('mocha');
global.chai = require('chai');
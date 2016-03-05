'use strict';

var config = require('./es2015BaseConfig')();

config.rules['no-console'] = 'off';
config.rules['no-process-env'] = 'off';
config.rules['no-process-exit'] = 'off';
config.rules['no-sync'] = 'off';

module.exports = config;

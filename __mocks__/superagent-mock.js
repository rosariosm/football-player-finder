var request = require('superagent');
var config = require('./superagent-mock-config');

export const superagentMock = require('superagent-mock')(request, config);
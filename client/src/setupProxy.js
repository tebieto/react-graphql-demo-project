/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/graphql', { target: 'http://localhost:4444' }));
};
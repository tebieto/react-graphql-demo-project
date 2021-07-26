/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import proxy from 'http-proxy-middleware';

export default function (app) {
  app.use(proxy('/graphql', { target: 'http://localhost:4444' }));
}

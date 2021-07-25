import express from 'express';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { syncSequelize } from './database/sequelize/models';
import path from 'path';
import apolloServer from './apollo';
import jwtAuth from './jwt';

const app = express();

apolloServer.start().then(() => {
  apolloServer.applyMiddleware({ app });
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ credentials: true }));
  app.use(cookieParser());
  app.use(compression());

  app.use(jwtAuth);

  app.use(express.static(path.join(__dirname, '../../client/build')));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
  });
});

syncSequelize();

export default app;

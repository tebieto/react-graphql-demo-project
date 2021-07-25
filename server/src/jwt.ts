import { Request } from 'express';
import jwt from 'express-jwt';

const unprotectedRoutes = [
  /\/register*/,
  /\/login*/,
  /\/auth*/,
  /\/logo*/,
  /\/favicon*/,
  /\/static*/,
  '/',
];

const jwtAuth = jwt({
  secret: process.env.JWT_SECRET || '',
  credentialsRequired: false,
  algorithms: ['HS256'],
  getToken: (req: Request) => req.cookies.token,
}).unless({ path: unprotectedRoutes });

export default jwtAuth;

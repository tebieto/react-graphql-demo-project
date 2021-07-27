import { Request } from 'express';
import jwt from 'express-jwt';

const jwtAuth = jwt({
  secret: process.env.JWT_SECRET || '',
  credentialsRequired: false,
  algorithms: ['HS256'],
  getToken: (req: Request) => req.cookies.token,
});

export default jwtAuth;

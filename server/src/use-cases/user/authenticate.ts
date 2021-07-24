import { CookieOptions, Response } from 'express';

export interface AuthenticateUserProps {
  res: Response;
  token: string;
}
const authenticate = (cookieOptions: CookieOptions) => {
  return async ({ res, token }: AuthenticateUserProps): Promise<void> => {
    res.cookie('token', token, cookieOptions);
  };
};

export default authenticate;

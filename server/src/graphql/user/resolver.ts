import { Response } from 'express';
import { loginUser, registerUser } from '../../controllers/user';
import { UserAttributes } from '../../interface/user';

export const userMutation = {
  async register(
    _: void,
    { email, password, full_name }: UserAttributes,
    { res }: { res: Response },
  ): Promise<UserAttributes | void> {
    const httpRequest = {
      params: { email, password, full_name },
      res,
    };
    return await registerUser(httpRequest);
  },
  async login(
    _: void,
    { email, password }: UserAttributes,
    { res }: { res: Response },
  ): Promise<UserAttributes | void> {
    const httpRequest = {
      params: { email, password },
      res,
    };
    return await loginUser(httpRequest);
  },
};

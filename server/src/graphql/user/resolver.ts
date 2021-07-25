import { Response } from 'express';
import {
  changeUserPasswordAfterReset,
  getCurrentUser,
  loginUser,
  registerUser,
  resetUserPassword,
} from '../../controllers/user';
import { UserAttributes } from '../../interface/user';

export const userQuery = {
  async currentUser(
    _: void,
    __: void,
    { user }: { user: UserAttributes },
  ): Promise<UserAttributes | void> {
    const httpRequest = {
      user,
    };
    return await getCurrentUser(httpRequest);
  },
};

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
  async resetPassword(
    _: void,
    { email }: UserAttributes,
    { res }: { res: Response },
  ): Promise<string | void> {
    const httpRequest = {
      params: { email },
      res,
    };
    return await resetUserPassword(httpRequest);
  },
  async changePasswordAfterReset(
    _: void,
    params: { email: string; password: string; token: string },
    { res }: { res: Response },
  ): Promise<string | void> {
    const httpRequest = {
      params,
      res,
    };
    return await changeUserPasswordAfterReset(httpRequest);
  },
};

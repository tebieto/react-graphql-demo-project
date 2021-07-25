import { Response } from 'express';
import { validateResetUserPasswordToken } from '../../controllers/token';
import { TokenAttributes } from '../../interface/token';

export const tokenMutation = {
  async validateResetPasswordToken(
    _: void,
    { email, token }: TokenAttributes,
    { res }: { res: Response },
  ): Promise<TokenAttributes | void> {
    const httpRequest = {
      params: { email, token },
      res,
    };
    return await validateResetUserPasswordToken(httpRequest);
  },
};

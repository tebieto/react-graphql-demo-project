import { Response } from 'express';
import { TokenAttributes } from '../../interface/token';
import { UserAttributes } from '../../interface/user';

interface UserChangePasswordOnReset {
  getToken: { (params: TokenAttributes): Promise<TokenAttributes | void> };
  compareToken: {
    (token: string, thisToken: string): Promise<boolean>;
  };
  encryptPassword: { (password: string): Promise<string> };
  changeUserPassword: {
    (params: UserAttributes): Promise<UserAttributes | void>;
  };
  deleteToken: { (params: TokenAttributes): Promise<TokenAttributes | void> };
  authenticateUser: {
    (props: { res: Response; token: string }): Promise<void>;
  };
}

const userChangePasswordOnReset = ({
  getToken,
  compareToken,
  encryptPassword,
  changeUserPassword,
  deleteToken,
  authenticateUser,
}: UserChangePasswordOnReset) => {
  return async function post(httpRequest: {
    params: { email: string; password: string; token: string };
    res: Response;
  }): Promise<string | void> {
    const { params, res } = httpRequest;
    const tokenObj = await getToken({
      ...params,
    });

    if (tokenObj) {
      const isValidToken = await compareToken(params.token, tokenObj.token);

      if (isValidToken) {
        const password = await encryptPassword(params.password);
        await changeUserPassword({ ...params, password });
        await deleteToken({ ...params });
        authenticateUser({ res, token: params.token });
        return 'Your password was changed successfully';
      } else {
        throw new Error('Invalid Token');
      }
    } else {
      throw new Error('Expired Token');
    }
  };
};

export default userChangePasswordOnReset;

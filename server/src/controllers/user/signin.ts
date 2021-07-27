import { Response } from 'express';
import { UserAttributes } from '../../interface/user';

interface UserSignIn {
  getUser: { (params: UserAttributes): Promise<UserAttributes | void> };
  comparePassword: {
    (password: string, thisPassword: string): Promise<boolean>;
  };
  authenticateUser: {
    (props: { res: Response; token: string }): Promise<void>;
  };
  generateToken: { (props: { id: string; email: string }): Promise<string> };
}
const userSignIn = ({
  getUser,
  comparePassword,
  generateToken,
  authenticateUser,
}: UserSignIn) => {
  return async function post(httpRequest: {
    params: UserAttributes;
    res: Response;
  }): Promise<UserAttributes | void> {
    const { params, res } = httpRequest;
    const user = await getUser({
      ...params,
    });
    if (user && user.id && params.password && user.password) {
      const validPassword = await comparePassword(
        params.password,
        user.password,
      );
      if (!validPassword) {
        throw new Error('This password is invalid');
      }
      const token = await generateToken({ id: user.id, email: user.email });
      await authenticateUser({ res, token });
      return user;
    }
  };
};

export default userSignIn;

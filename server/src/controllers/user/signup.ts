import { Response } from 'express';
import { UserAttributes } from '../../interface/user';

interface UserSignUp {
  encryptPassword: { (password: string): Promise<string> };
  addUser: { (params: UserAttributes): Promise<UserAttributes | void> };
  authenticateUser: {
    (props: { res: Response; token: string }): Promise<void>;
  };
  generateToken: { (props: { id: string; email: string }): Promise<string> };
}
const userSignUp = ({
  encryptPassword,
  addUser,
  generateToken,
  authenticateUser,
}: UserSignUp) => {
  return async function post(httpRequest: {
    params: UserAttributes;
    res: Response;
  }): Promise<UserAttributes | void> {
    try {
      const { params, res } = httpRequest;
      const password = await encryptPassword(params.password as string);
      const user = await addUser({
        ...params,
        password,
      });
      if (user && user.id) {
        const token = await generateToken({ id: user.id, email: user.email });
        await authenticateUser({ res, token });
        return user;
      }
    } catch (e) {
      console.log(e);
      throw new Error('Error creating user');
    }
  };
};

export default userSignUp;

import { TokenAttributes } from '../../interface/token';
import { UserAttributes } from '../../interface/user';

interface UserResetPassword {
  getUser: { (params: UserAttributes): Promise<UserAttributes | void> };
  saveToken: { (params: TokenAttributes): Promise<TokenAttributes | void> };
  generateToken: { (props: { id: string; email: string }): Promise<string> };
  sendResetPasswordLink: {
    (props: { token: string; user: UserAttributes }): void;
  };
}

const userResetPassword = ({
  getUser,
  generateToken,
  saveToken,
  sendResetPasswordLink,
}: UserResetPassword) => {
  return async function post(httpRequest: {
    params: UserAttributes;
  }): Promise<string | void> {
    try {
      const { params } = httpRequest;
      const user = await getUser({
        ...params,
      });
      if (user && user.id) {
        const token = await generateToken({ id: user.id, email: user.email });
        await saveToken({ token, email: params.email });
        await sendResetPasswordLink({ token, user });
        return 'Reset Link sent successfully';
      } else {
        throw new Error('Use with this email does not exist');
      }
    } catch (e) {
      console.log(e);
      throw new Error('Error resetting password');
    }
  };
};

export default userResetPassword;

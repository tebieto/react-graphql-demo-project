import { TokenAttributes } from '../../interface/token';
import { UserAttributes } from '../../interface/user';

interface UserResetPassword {
  getUser: { (params: UserAttributes): Promise<UserAttributes | void> };
  generateToken: { (props: { id: string; email: string }): Promise<string> };
  encryptToken: { (token: string): Promise<string> };
  saveToken: { (params: TokenAttributes): Promise<TokenAttributes | void> };
  sendResetPasswordLink: {
    (props: { token: string; user: UserAttributes }): void;
  };
}

const userResetPassword = ({
  getUser,
  generateToken,
  encryptToken,
  saveToken,
  sendResetPasswordLink,
}: UserResetPassword) => {
  return async function post(httpRequest: {
    params: UserAttributes;
  }): Promise<string | void> {
    const { params } = httpRequest;
    const user = await getUser({
      ...params,
    });
    if (user && user.id) {
      const generatedToken = await generateToken({
        id: user.id,
        email: user.email,
      });
      const token = await encryptToken(generatedToken);
      await saveToken({ token, email: params.email });
      await sendResetPasswordLink({ token: generatedToken, user });
      return 'Reset Link sent successfully';
    } else {
      throw new Error('Use with this email does not exist');
    }
  };
};

export default userResetPassword;

import { TokenAttributes } from '../../interface/token';

interface ResetPasswordTokenValidate {
  getToken: { (params: TokenAttributes): Promise<TokenAttributes | void> };
  compareToken: {
    (token: string, thisToken: string): Promise<boolean>;
  };
}
const resetPasswordTokenValidate = ({
  getToken,
  compareToken,
}: ResetPasswordTokenValidate) => {
  return async function post(httpRequest: {
    params: TokenAttributes;
  }): Promise<TokenAttributes | void> {
    try {
      const { params } = httpRequest;
      const resetToken = await getToken({
        ...params,
      });
      if (resetToken) {
        const isValid = await compareToken(params.token, resetToken.token);
        if (!isValid) {
          throw new Error('Token is invalid');
        }
        return resetToken;
      }
    } catch (e) {
      console.log(e);
      throw new Error('Error validating token');
    }
  };
};

export default resetPasswordTokenValidate;

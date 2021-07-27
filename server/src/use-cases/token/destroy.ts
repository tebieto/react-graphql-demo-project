import { TokenBaseQuery } from '../../database/token/base';
import { TokenAttributes } from '../../interface/token';

interface DestroyToken {
  tokenDb: TokenBaseQuery;
}

const destroyToken = ({ tokenDb }: DestroyToken) => {
  return async function destroy(
    info: TokenAttributes,
  ): Promise<TokenAttributes | void> {
    const { email } = info;
    if (email) {
      const token = await tokenDb.destroyToken(info);
      if (token) {
        return token;
      } else {
        throw new Error('No token found for this email..');
      }
    } else {
      throw new Error('Invalid Email Provided');
    }
  };
};

export default destroyToken;

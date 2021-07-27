import { TokenBaseQuery } from '../../database/token/base';
import { TokenAttributes } from '../../interface/token';

interface FindToken {
  tokenDb: TokenBaseQuery;
}

const findToken = ({ tokenDb }: FindToken) => {
  return async function get(
    info: TokenAttributes,
  ): Promise<TokenAttributes | void> {
    const { email } = info;
    if (email) {
      const token = await tokenDb.getTokenByEmail(info);
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

export default findToken;
